//
//  Pickup.swift
//  EcoSoapBank
//
//  Created by Jon Bash on 8/7/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

struct Pickup: Identifiable, PickupBaseContainer, Equatable, Hashable {
    let base: Base

    let id: String
    let confirmationCode: String
    let cartons: [Carton]
    let property: Property

    internal init(base: Pickup.Base, id: String, confirmationCode: String, cartons: [Pickup.Carton], property: Property) {
        self.base = base
        self.id = id
        self.confirmationCode = confirmationCode
        self.cartons = cartons
        self.property = property
    }

    static func == (lhs: Pickup, rhs: Pickup) -> Bool {
        lhs.id == rhs.id
            && lhs.confirmationCode == rhs.confirmationCode
            && lhs.property.id == rhs.property.id
    }

    var formatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-mm-dd"
        return formatter
    }()

    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
        hasher.combine(confirmationCode)
        hasher.combine(property.id)
    }
}

// MARK: - SubTypes

extension Pickup {

    struct Base: Equatable, Codable {
        let collectionType: CollectionType
        let status: Status
        let readyDate: Date
        let pickupDate: Date?
        let notes: String?
    }

    // MARK: Schedule I/O

    struct ScheduleInput: PickupBaseContainer, Encodable {
        let base: Base

        let propertyID: String
        let cartons: [CartonContents]

        func encode(to encoder: Encoder) throws {
            // Encode top level values to JSON
            var container = encoder.container(keyedBy: PickupKeys.self)
            try container.encode(collectionType, forKey: .collectionType)
            try container.encode(status, forKey: .status)
            try container.encode(readyDate, forKey: .readyDate)
            try container.encodeIfPresent(pickupDate, forKey: .pickupDate)
            try container.encode(propertyID, forKey: .propertyId)
            try container.encodeIfPresent(notes, forKey: .notes)

            //Encode Cartons in Carton container
            try container.encode(cartons, forKey: .cartons)
        }
    }

    struct ScheduleResult: Decodable {
        let pickup: Pickup?
        let labelURL: URL?

        // swiftlint:disable nesting
        enum CodingKeys: String, CodingKey {
            case pickup
            case labelURL = "label"
        }
        // swiftling:enable nesting
    }

    struct Carton: Identifiable, Codable {
        let id: String
        let contents: CartonContents?

        internal init(id: String, contents: Pickup.CartonContents?) {
            self.id = id
            self.contents = contents
        }

        // Decode Carton and CartonContents
        init(from decoder: Decoder) throws {
            let container = try decoder.container(keyedBy: CartonKeys.self)
            let id = try container.decode(String.self, forKey: .id)
            let product = try container.decodeIfPresent(HospitalityService.self, forKey: .product)
            let percentFull = try container.decodeIfPresent(Int.self, forKey: .percentFull)

            // Create the CartonContents object
            let cartonContents = CartonContents(product: product ?? HospitalityService.other, percentFull: percentFull ?? 0)

            self.id = id
            self.contents = cartonContents
        }

        func encode(to encoder: Encoder) throws {
            var container = encoder.container(keyedBy: CartonKeys.self)
            try container.encode(id, forKey: .id)
            try container.encodeIfPresent(contents?.product, forKey: .product)
            try container.encodeIfPresent(contents?.percentFull, forKey: .percentFull)
        }
    }

    struct CartonContents: Hashable, Codable {
        var product: HospitalityService
        var percentFull: Int

        var id: Int { self.hashValue }
    }

    // MARK: Enums

    enum Status: String, Codable, CaseIterable {
        case submitted = "SUBMITTED"
        case outForPickup = "OUT_FOR_PICKUP"
        case complete = "COMPLETE"
        case cancelled = "CANCELLED"
    }

    enum CollectionType: String, Codable, Equatable, CaseIterable {
        case courierConsolidated = "COURIER_CONSOLIDATED"
        case courierDirect = "COURIER_DIRECT"
        case generatedLabel = "GENERATED_LABEL"
        case local = "LOCAL"
        case other = "OTHER"
    }

    enum PickupKeys: CodingKey {
        case id
        case confirmationCode
        case collectionType
        case status
        case readyDate
        case pickupDate
        case property
        case cartons
        case notes
        case propertyId
    }

    enum CartonKeys: CodingKey {
        case id
        case product
        case percentFull
    }
}

extension Pickup: Decodable {

    // Decodes Pickup and the base object
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: PickupKeys.self)

        // Decodes all top level values from JSON
        let id = try container.decode(String.self, forKey: .id)
        let confirmationCode = try container.decode(String.self, forKey: .confirmationCode)
        let collectionType = try container.decode(CollectionType.self, forKey: .collectionType)
        let status = try container.decode(Status.self, forKey: .status)

        // Decode and convert Date string to Date.
        let readyDate = try container.decode(Date.self, forKey: .readyDate)
        
        let pickupDateString = try container.decodeIfPresent(String.self, forKey: .pickupDate)
    
        let pickupDate: Date?
        
        if pickupDateString == nil || pickupDateString == "undefined" {
            pickupDate = nil
        } else {
            pickupDate = try container.decodeIfPresent(Date.self, forKey: .pickupDate)
        }
        
        let property = try container.decode(Property.self, forKey: .property)
        let notes = try container.decodeIfPresent(String.self, forKey: .notes)

        // Decodes Cartons based on Carton decoder
        var cartonsArrayContainer = try container.nestedUnkeyedContainer(forKey: .cartons)
        let cartonsDict = try cartonsArrayContainer.decode(Pickup.Carton.self)

        let base = Base(collectionType: collectionType, status: status, readyDate: readyDate, pickupDate: pickupDate, notes: notes)

        self.base = base
        self.cartons = [cartonsDict]
        self.id = id
        self.property = property
        self.confirmationCode = confirmationCode
    }
}

// MARK: Base Container Protocol

protocol PickupBaseContainer {
    var base: Pickup.Base { get }
}

extension PickupBaseContainer {
    var collectionType: Pickup.CollectionType { base.collectionType }
    var status: Pickup.Status { base.status }
    var readyDate: Date { base.readyDate }
    var pickupDate: Date? { base.pickupDate }
    var notes: String { base.notes ?? "" }
}

// MARK: - Convenience Extensions

extension Pickup.Status {
    var color: UIColor {
        switch self {
        case .submitted:
            return .systemBlue
        case .outForPickup:
            return .systemOrange
        case .complete:
            return .esbGreen
        case .cancelled:
            return .systemRed
        }
    }

    var display: String {
        switch self {
        case .outForPickup: return "Out for Pickup"
        default: return rawValue.lowercased().capitalized
        }
    }
}

extension Pickup.Carton {
    var display: String? { contents?.display }
}

extension Pickup.CartonContents {
    var display: String { "\(product.rawValue.capitalized): \(percentFull)g" }
}
