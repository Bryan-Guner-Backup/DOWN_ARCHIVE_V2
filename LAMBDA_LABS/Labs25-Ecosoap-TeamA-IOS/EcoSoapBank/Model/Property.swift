//
//  Property.swift
//  EcoSoapBank
//
//  Created by Jon Bash on 8/7/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import Foundation
import Combine

struct Property: Codable, Equatable, Identifiable, Hashable {
    let id: String
    let name: String
    let propertyType: PropertyType
    let rooms: Int
    let services: [HospitalityService]
    let collectionType: Pickup.CollectionType
    let logo: String?
    let phone: String?
    let billingAddress: Address?
    let shippingAddress: Address?
    let shippingNote: String?
    let notes: String?

    enum PropertyType: String, Codable, CaseIterable, Identifiable, Hashable {
        case bedAndBreakfast = "BED_AND_BREAKFAST"
        case guesthouse = "GUESTHOUSE"
        case hotel = "HOTEL"
        case other = "OTHER"

        var id: String { rawValue }

        var display: String {
            if case .bedAndBreakfast = self {
                return "Bed & Breakfast"
            } else {
                return rawValue.capitalized
            }
        }
    }

    enum BillingMethod: String, Codable, CaseIterable {
        case ach = "ACH"
        case credit = "CREDIT"
        case debit = "DEBIT"
        case invoice = "INVOICE"
    }
}

// MARK: - Property Selection

enum PropertySelection: Hashable {
    case all
    case select(Property)

    var property: Property? {
        if case .select(let property) = self {
            return property
        }
        return nil
    }
    var display: String { property?.name ?? "All" }

    init(_ property: Property?) {
        if let prop = property {
            self = .select(prop)
        } else {
            self = .all
        }
    }
}


extension UserDefaults {
    
    @UserDefault(Key("selectedPropertyIDsByUser")) static var selectedPropertyIDsByUser: [String: String]?
    
    private static let propertySelectionByUserID = PassthroughSubject<[String: PropertySelection], Never>()

    func propertySelection(forUser user: User) -> PropertySelection {
        PropertySelection(selectedProperty(forUser: user))
    }
    
    // Subscribe to observe the selected property via Combine
    func selectedPropertyPublisher(forUser user: User) -> AnyPublisher<PropertySelection, Never> {
        UserDefaults.propertySelectionByUserID
            .compactMap({ propertySelectionByUserID -> PropertySelection? in
                if let propertySelection = propertySelectionByUserID[user.id] {
                    return propertySelection
                } else { return nil }
            }).eraseToAnyPublisher()
    }
    
    // Get selected property from user defaults
    func selectedProperty(forUser user: User) -> Property? {
        guard
            let propertyIDsByUserID = Self.selectedPropertyIDsByUser,
            let propertyID = propertyIDsByUserID[user.id]
            else { return nil }
        return user.properties?.first(where: { $0.id == propertyID })
    }

    // Set selected property to user defaults
    func setSelectedProperty(_ property: Property?, forUser user: User) {
        if Self.selectedPropertyIDsByUser == nil {
            Self.selectedPropertyIDsByUser = [:] // add user default if not there
        }
        Self.selectedPropertyIDsByUser?[user.id] = property?.id
        UserDefaults.propertySelectionByUserID.send([user.id: PropertySelection(property)])
    }
}

// MARK: - Editable Property Info

struct EditablePropertyInfo: Encodable, Equatable {
    let id: String?
    var name: String
    var propertyType: Property.PropertyType
    var billingAddress: EditableAddressInfo
    var shippingAddress: EditableAddressInfo
    var phone: String

    init(_ property: Property?) {
        self.id = property?.id
        self.name = property?.name ?? ""
        self.propertyType = property?.propertyType ?? .hotel
        self.billingAddress = EditableAddressInfo(property?.billingAddress)
        self.shippingAddress = EditableAddressInfo(property?.shippingAddress)
        self.phone = property?.phone ?? ""
    }
}
