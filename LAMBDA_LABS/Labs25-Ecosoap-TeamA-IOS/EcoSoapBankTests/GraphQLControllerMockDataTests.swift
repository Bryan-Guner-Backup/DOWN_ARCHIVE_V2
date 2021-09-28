//
//  GraphQLControllerMockDataTests.swift
//  EcoSoapBankTests
//
//  Created by Christopher Devito on 8/13/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.


import XCTest
@testable import EcoSoapBank

class GraphQLControllerTests: XCTestCase {
    let useMocks = true
    
    var graphQLController: GraphQLController!
    var expectation: XCTestExpectation!
    
    override func setUp() {
        super.setUp()
        graphQLController = GraphQLController()
        expectation = XCTestExpectation(description: "Get response from backend API")
    }
    
    func mockLoader(withFile file: String) -> MockDataLoader {
        let bundle = Bundle(for: Self.self)
        
        guard let url = bundle.url(forResource: file, withExtension: ".json"),
            let mockData = try? Data(contentsOf: url) else {
                fatalError("Unable to get mock data from path")
        }
    
        let mockLoader = MockDataLoader(data: mockData,
                                        error: nil)
        return mockLoader
    }
    
    // MARK: - Impact Stats
    
    func testFetchImpactStats() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockImpactStatsByPropertyId"))
        }
        
        graphQLController.fetchImpactStats(forPropertyID: "PropertyId1") { result in
            
            guard let impactStats = try? result.get() else {
                XCTFail("Unable to get valid impact stats from returned data")
                return
            }
            
            XCTAssertEqual(impactStats.soapRecycled, 11)
            XCTAssertEqual(impactStats.linensRecycled, 11)
            XCTAssertEqual(impactStats.bottlesRecycled, 11)
            XCTAssertEqual(impactStats.paperRecycled, 11)
            XCTAssertEqual(impactStats.peopleServed, 11)
            XCTAssertEqual(impactStats.womenEmployed, 11)
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testFetchImpactStatsWithInvalidPropertyID() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockImpactStatsFailure"))
        }
        
        graphQLController.fetchImpactStats(forPropertyID: "InvalidPropertyID") { result in
            
            XCTAssertNil(try? result.get(), "There should be no impact stats for an invalid property ID")
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // MARK: - Users
    
    // TODO: Test Login
    
    func testFetchUserById() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockUserByIdInput"))
        }
        
        graphQLController.fetchUser(byID: "UserId1") { result in
            
            guard let user = try? result.get() else {
                XCTFail("Unable to get valid User from returned data")
                return
            }
            
            XCTAssertEqual(user.id, "UserId1")
            XCTAssertEqual(user.firstName, "First Name 1")
            XCTAssertEqual(user.lastName, "Last Name 1")
            XCTAssertEqual(user.title, "Title 1")
            XCTAssertEqual(user.company, "Company 1")
            XCTAssertEqual(user.email, "Email 1")
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testFetchUserWithInvalidID() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockUserByIdFailure"))
        }
        
        graphQLController.fetchUser(byID: "InvalidUserID") { result in
            
            XCTAssertNil(try? result.get(), "There should be no user for an invalid user ID")
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testUpdateProfile() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockUpdateUserProfileSuccess"))
        }
        
        let inputUser = User(id: "00uvb3lz10Bekzr854x6",
                             firstName: "Llama",
                             middleName: nil,
                             lastName: "Dude",
                             title: nil,
                             company: nil,
                             email: "llama1@maildrop.cc",
                             phone: nil,
                             skype: nil,
                             properties: nil)
        
        var info = EditableProfileInfo(user: inputUser)
        
        let newMiddleName = UUID().uuidString
        info.middleName = newMiddleName
        let newPhoneNumber = UUID().uuidString
        info.phone = newPhoneNumber
        let newSkype = UUID().uuidString
        info.skype = newSkype
        
        graphQLController.updateUserProfile(info) { result in
            guard let updatedUser = try? result.get() else {
                XCTFail("Unable to get valid User from returned data")
                return
            }
            
            XCTAssertEqual(updatedUser.id, inputUser.id)
            XCTAssertEqual(updatedUser.firstName, inputUser.firstName)
            XCTAssertEqual(updatedUser.lastName, inputUser.lastName)
            XCTAssertEqual(updatedUser.email, inputUser.email)
            
            if !self.useMocks {
                XCTAssertEqual(updatedUser.middleName, newMiddleName)
                XCTAssertEqual(updatedUser.skype, newSkype)
            }
            
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // MARK: - Pickups
    
    func testFetchPickupsForPropertyId() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockPickupsByPropertyIdSuccess"))
        }
        
        graphQLController.fetchPickups(forPropertyID: "PropertyId1") { result in
            
            guard let firstPickpup = try? result.get().first else {
                XCTFail("Unable to get Pickup from returned data")
                return
            }
            
            XCTAssertEqual(firstPickpup.id, "PickupId1")
            XCTAssertEqual(firstPickpup.confirmationCode, "PickupConfirmationCode1")
            XCTAssertEqual(firstPickpup.collectionType, .generatedLabel)
            XCTAssertEqual(firstPickpup.property.id, "PropertyId1")
            XCTAssertEqual(firstPickpup.cartons[0].id, "PickupCartonId1")
            XCTAssertEqual(firstPickpup.notes, "Pickup Notes 1")
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testFetchPickupsWithInvalidPropertyId() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockPickupsByPropertyIdFailure"))
        }
        
        graphQLController.fetchPickups(forPropertyID: "InvalidPropertyID") { result in
            
            guard let pickups = try? result.get() else {
                return
            }
            
            XCTAssertEqual(
                pickups.count,
                0,
                "There should be no pickups for an invalid property ID"
            )
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testSchedulePickup() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockSchedulePickupSuccess"))
        }
        
        let timeZone = TimeZone(identifier: "America/New_York")!
        let readyDate = Date(year: 2020, month: 09, day: 25, hour: 1, minute: 1, timeZone: timeZone)!
        
        let scheduleInput = Pickup.ScheduleInput(
            base: Pickup.Base(collectionType: .generatedLabel,
                              status: .submitted,
                              readyDate: readyDate,
                              pickupDate: nil,
                              notes: nil),
            propertyID: "PropertyId1",
            cartons: [Pickup.CartonContents(product: .soap, percentFull: 100)]
        )
        
        graphQLController.schedulePickup(scheduleInput) { result in
            
            guard let scheduleResult = try? result.get() else {
                XCTFail("Unable to get valid Pickup data from returned data")
                return
            }
            
            let status = scheduleResult.pickup?.status
            let cartonProduct = scheduleResult.pickup?.cartons[0].contents?.product
            let cartonPercentFull = scheduleResult.pickup?.cartons[0].contents?.percentFull
            let collectionType = scheduleResult.pickup?.collectionType
            let label = scheduleResult.labelURL
            
            XCTAssertEqual(status, .submitted)
            XCTAssertEqual(cartonProduct, .soap)
            XCTAssertEqual(cartonPercentFull, 100)
            XCTAssertEqual(collectionType, .generatedLabel)
            XCTAssertEqual(
                label?.absoluteString,
                "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            )
            XCTAssertEqual(scheduleResult.pickup?.readyDate, readyDate)
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testCancelPickupRequest() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockCancelPickupSuccess"))
        }
        
        graphQLController.cancelPickup("PickupId1") { result in
            
            guard let pickup = try? result.get() else {
                XCTFail("Unable to get valid Pickup from returned data")
                return
            }
            
            XCTAssertEqual(pickup.id, "PickupId1")
            XCTAssertEqual(pickup.confirmationCode, "PickupConfirmationCode1")
            XCTAssertEqual(pickup.collectionType, .generatedLabel)
            XCTAssertEqual(pickup.property.id, "PropertyId1")
            XCTAssertEqual(pickup.cartons[0].id, "PickupCartonId1")
            XCTAssertEqual(pickup.cartons[0].contents?.percentFull, 11)
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testCancelInvalidPickup() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockCancelPickupFailure"))
        }
        
        graphQLController.cancelPickup("InvalidPickup") { result in
            
            do {
                _ = try result.get()
            } catch let error as GraphQLError {
                switch error {
                case .backendMessages(let messages):
                    XCTAssertEqual(messages.first, "No result found")
                default:
                    XCTFail("Canceling an invalid pickup should result in a server error")
                }
            } catch {
                XCTFail("Canceling an invalid pickup should result in a GraphQLError")
            }
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // MARK: - Properties
    
    func testFetchPropertiesForUserId() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockPropertiesByUserIdSuccess"))
        }
        
        graphQLController.fetchProperties(forUserID: "UserId1") { result in
            
            guard let firstProperty = try? result.get().first else {
                XCTFail("Unable to get Properties from returned data")
                return
            }
            
            XCTAssertEqual(firstProperty.id, "PropertyId1")
            XCTAssertEqual(firstProperty.propertyType, .hotel)
            XCTAssertEqual(firstProperty.rooms, 111)
            XCTAssertEqual(firstProperty.services, [.soap, .linens])
            XCTAssertEqual(firstProperty.shippingNote, "Shipping note 1.")
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    func testFetchPropertiesForInvalidUserId() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockPropertiesByUserIdFailure"))
        }
        
        graphQLController.fetchProperties(forUserID: "InvalidUserID") { result in
            
            guard let properties = try? result.get() else {
                return
            }
            
            XCTAssertEqual(
                properties.count,
                0,
                "There should be no properties for an invalid user ID"
            )
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // swiftlint:disable function_body_length
    func testUpdateProperty() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockUpdatePropertySuccess"))
        }
        
        let inputAddress = Address(address1: "Address 5 Line 1",
                                   address2: "Address 5 Line 2",
                                   address3: "Address 5 Line 3",
                                   city: "City 5",
                                   state: "State 5",
                                   postalCode: "55555",
                                   country: "US",
                                   formattedAddress: nil)
        
        let inputProperty = Property(id: "PropertyId1",
                                     name: "Property 1",
                                     propertyType: .hotel,
                                     rooms: 111,
                                     services: [.soap, .linens],
                                     collectionType: .generatedLabel,
                                     logo: "https://test.com/logo1.png",
                                     phone: "111-111-1111",
                                     billingAddress: inputAddress,
                                     shippingAddress: inputAddress,
                                     shippingNote: "Shipping note 1.",
                                     notes: "Notes 1.")
        
        var info = EditablePropertyInfo(inputProperty)
        
        let newPhoneNumber = UUID().uuidString; info.phone = newPhoneNumber
        
        graphQLController.updateProperty(with: info) { result in
            guard let updatedProperty = try? result.get() else {
                XCTFail("Unable to get valid User from returned data")
                return
            }
            
            XCTAssertEqual(updatedProperty.id, inputProperty.id)
            XCTAssertEqual(updatedProperty.name, inputProperty.name)
            XCTAssertEqual(updatedProperty.propertyType, inputProperty.propertyType)
            XCTAssertEqual(updatedProperty.rooms, inputProperty.rooms)
            XCTAssertEqual(updatedProperty.services, inputProperty.services)
            XCTAssertEqual(updatedProperty.collectionType, inputProperty.collectionType)
            XCTAssertEqual(updatedProperty.logo, inputProperty.logo)
            XCTAssertEqual(updatedProperty.billingAddress, inputProperty.billingAddress)
            XCTAssertEqual(updatedProperty.shippingAddress, inputProperty.shippingAddress)
            XCTAssertEqual(updatedProperty.shippingNote, inputProperty.shippingNote)
            XCTAssertEqual(updatedProperty.notes, inputProperty.notes)
            
            if !self.useMocks {
                XCTAssertEqual(updatedProperty.phone, newPhoneNumber)
            }
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // MARK: - Payments
    
    func testFetchPaymentsForPropertyId() {
        if useMocks {
            graphQLController = .init(session: mockLoader(withFile: "mockPaymentsByPropertyIdSuccess"))
        }
        
        graphQLController.fetchPayments(forPropertyID: "PropertyId1") { result in
            guard let firstPayment = try? result.get().first else {
                XCTFail("Unable to get valid Payment from returned data")
                return
            }
            
            XCTAssertEqual(firstPayment.id, "PaymentId1")
            XCTAssertEqual(firstPayment.invoiceCode, "Invoice1")
            XCTAssertEqual(firstPayment.invoice, "https://test.com/invoice1")
            XCTAssertEqual(firstPayment.amountPaid, 1111)
            XCTAssertEqual(firstPayment.amountDue, 1111)
            XCTAssertEqual(firstPayment.date.iso8601String, "2020-01-01T02:01:01Z")
            XCTAssertEqual(firstPayment.invoicePeriodStartDate?.iso8601String, "2020-01-01T02:01:01Z")
            XCTAssertEqual(firstPayment.invoicePeriodEndDate?.iso8601String, "2020-03-01T02:01:01Z")
            XCTAssertEqual(firstPayment.dueDate?.iso8601String, "2020-01-01T02:01:01Z")
            XCTAssertEqual(firstPayment.paymentMethod, .ach)
            
            self.expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
}
