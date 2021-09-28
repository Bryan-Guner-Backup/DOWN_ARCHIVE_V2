//
//  NetworkingControllerTests.swift
//  Budget BlocksTests
//
//  Created by Isaac Lyons on 1/27/20.
//  Copyright © 2020 Isaac Lyons. All rights reserved.
//

import XCTest
@testable import Budget_Blocks

class NetworkingControllerTests: XCTestCase {

    func testRegister() {
        let networkingController = NetworkingController()
        let expectation = self.expectation(description: "Login")
        
        networkingController.register(email: "email@example.com", password: "password", firstName: "Test", lastName: "Lambda") { message, error in
            XCTAssertNil(error)
            XCTAssertNotNil(message)
            expectation.fulfill()
        }
        
        waitForExpectations(timeout: 5, handler: nil)
    }
    
    func testLogin() {
        let networkingController = NetworkingController()
        let expectation = self.expectation(description: "Login")
        
        networkingController.login(email: "email@example.com", password: "password") { token, error in
            XCTAssertNil(error)
            XCTAssertNotNil(token)
            expectation.fulfill()
        }
        
        waitForExpectations(timeout: 5, handler: nil)
    }
    
    func testFetchTransactions() {
        let networkingController = NetworkingController()
        networkingController.bearer = Bearer(token: "token", userID: 1, linkedAccount: false, manualAccount: false)
        let expectation = self.expectation(description: "Fetch")
        
        networkingController.fetchTransactionsFromServer { json, error in
            XCTAssertNil(error)
            XCTAssertNotNil(json)
            expectation.fulfill()
        }
        
        waitForExpectations(timeout: 30, handler: nil)
    }
    
    func testFetchCategories() {
        let networkingController = NetworkingController()
        networkingController.bearer = Bearer(token: "token", userID: 1, linkedAccount: false, manualAccount: false)
        let expectation = self.expectation(description: "Fetch")
        
        networkingController.fetchCategoriesFromServer { json, error in
            XCTAssertNil(error)
            XCTAssertNotNil(json)
            expectation.fulfill()
        }
        
        waitForExpectations(timeout: 30, handler: nil)
    }
    
    
    func testLogout() {
        let networkingController = NetworkingController()
        networkingController.logout()
        
    }
    
    func testCreateTransaction() {
        let networkingController = NetworkingController()
        let expectation = self.expectation(description: "Fetch")
        
        networkingController.createCategory(named: "Computer") { json, error in
            XCTAssertNil(error)
            XCTAssertNil(json)
            expectation.fulfill()
        }
        waitForExpectations(timeout: 5, handler: nil)
    }
    
    func testBadInfo() {
        // the hope of this test is for it to fail
        let networkingController = NetworkingController()
        let expectation = self.expectation(description: "Login")
        
        networkingController.login(email: "Email@example.com", password: "password") { token, error in
            XCTAssertNil(error)
            XCTAssertNotNil(token)
            expectation.fulfill()
        }
    }
}
