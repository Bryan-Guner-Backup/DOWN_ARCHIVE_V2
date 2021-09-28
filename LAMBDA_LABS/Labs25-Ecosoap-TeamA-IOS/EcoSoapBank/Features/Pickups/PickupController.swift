//
//  PickupController.swift
//  EcoSoapBank
//
//  Created by Jon Bash on 2020-08-07.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import Foundation
import Combine


protocol PickupDataProvider {
    func fetchPickups(
        forPropertyID propertyID: String,
        _ completion: @escaping ResultHandler<[Pickup]>)

    func schedulePickup(
        _ pickupInput: Pickup.ScheduleInput,
        completion: @escaping ResultHandler<Pickup.ScheduleResult>)
}


class PickupController: ObservableObject {
    @Published private(set) var pickups: [Pickup] = []
    @Published private(set) var error: Error?

    var properties: [Property]? {
        user.properties
    }
    var selectedProperty: Property? {
        UserDefaults.standard.selectedProperty(forUser: user)
    }

    private(set) var user: User

    private var dataProvider: PickupDataProvider
    private var schedulePickupCancellables: Set<AnyCancellable> = []
    private var cancellables: Set<AnyCancellable> = []

    private static let pickupSorter: (Pickup, Pickup) -> Bool = {
        $0.readyDate > $1.readyDate
    }

    init(user: User, dataProvider: PickupDataProvider) {
        self.dataProvider = dataProvider
        self.user = user

        // Observe changes to property ID in user defaults; fetch new pickups on change
        UserDefaults.standard.selectedPropertyPublisher(forUser: user)
            .mapError({ _ in ESBError.unknown })
            .compactMap({ [weak self] selection in
                self?.pickupsPublisher(forPropertyID: selection.property?.id)
            }).flatMap { $0 }
            .sink(
                receiveCompletion: { [weak self] complete in
                    if case .failure(let err) = complete { self?.error = err }
                }, receiveValue: { _ in })
            .store(in: &cancellables)
    }

    @discardableResult
    func fetchPickups(forPropertyID propertyID: String) -> Future<[Pickup], Error> {
        Future { [weak self] promise in
            guard let self = self else { return promise(.failure(ESBError.unknown)) }

            self.dataProvider.fetchPickups(forPropertyID: propertyID) { [weak self] result in
                guard let self = self else { return promise(result) }
                
                if case .success(let newPickups) = result {
                    let sortedPickups = newPickups.sorted(by: Self.pickupSorter)
                    DispatchQueue.main.async {
                        self.pickups = sortedPickups
                    }
                    promise(.success(sortedPickups))
                } else {
                    promise(result)
                }
            }
        }
    }

    func fetchPickupsForAllProperties() -> AnyPublisher<[Pickup], Error> {
        guard let properties = properties, !properties.isEmpty else {
            return Future { $0(.failure(UserError.noProperties)) }
                .eraseToAnyPublisher()
        }
        return properties
            .map { fetchPickups(forPropertyID: $0.id) }             // [Publisher<[Pickup]>]
            .publisher                                              // Publisher<[Publisher[Pickup]>]>
            .mapError { _ in ESBError.unknown }                     // makes compiler happy?
            .flatMap { $0 }                                         // [Publisher[Pickup]>] -> Publisher<[Pickup]...>
            .collect()                                              // [Pickup]... -> [[Pickup]]
            .map { arrays in arrays.flatMap { $0 } }                // [[Pickup]] -> [Pickup]
            .map { Array(Set($0)).sorted(by: Self.pickupSorter) }   // unique, sort
            .receive(on: DispatchQueue.main)                        // run following on main thread
            .handleEvents(receiveOutput: { [weak self] pickups in   // set sorted pickups
                DispatchQueue.main.async {
                    self?.pickups = pickups
                }
            }).eraseToAnyPublisher()
    }

    func schedulePickup(
        for pickupInput: Pickup.ScheduleInput
    ) -> Future<Pickup.ScheduleResult, Error> {
        Future { [unowned self] promise in
            self.dataProvider.schedulePickup(pickupInput) { [weak self] result in
                guard let self = self else { return }
                if case .success(let pickupResult) = result {
                    guard let pickup = pickupResult.pickup else {
                        return promise(.failure(GraphQLError.noData))
                    }
                    var sortingPickups = self.pickups
                    sortingPickups.append(pickup)
                    sortingPickups.sort(by: Self.pickupSorter)
                    DispatchQueue.main.async {
                        self.pickups = sortingPickups
                    }
                }
                promise(result)
            }
        }
    }

    func fetchPickupsForSelectedProperty() -> AnyPublisher<[Pickup], Error> {
        pickupsPublisher(forPropertyID: selectedProperty?.id)
    }

    private func pickupsPublisher(forPropertyID propertyID: String?) -> AnyPublisher<[Pickup], Error> {
        if let id = propertyID, (properties ?? []).contains(where: { $0.id == id }) {
            return fetchPickups(forPropertyID: id).eraseToAnyPublisher()
        } else {
            return fetchPickupsForAllProperties()
        }
    }
}
