//
//  Budget_BlocksUITests.swift
//  Budget BlocksUITests
//
//  Created by Isaac Lyons on 1/24/20.
//  Copyright © 2020 Isaac Lyons. All rights reserved.
//

import XCTest
@testable import Budget_Blocks

class Budget_BlocksUITests: XCTestCase {
    
    private var app: XCUIApplication = { XCUIApplication() }()
    
    
    private var AmountTF: XCUIElement!
    private var DateTF: XCUIElement!
    private var SaveButton: XCUIElement!
    private var doubleBtn: XCUIElement!
    private var CategoryTF: XCUIElement!
    private var CatCell: XCUIElement! {
        app.cells["Food and Drink"]
    }
    
    override func setUp() {
        continueAfterFailure = false
        
        app.launch()
        
        let signOutButton = app.buttons["Sign out"]
        if signOutButton.exists {
            signOutButton.tap()
        }
        AmountTF = app.textFields["AmountTF"]
        DateTF = app.textFields["DateTF"]
        SaveButton = app.buttons["SaveButton"]
        CategoryTF = app.textFields["CategoryTF"]
        //CatCell = app.cells["Food and Drink"]
        
    }
    
    override func tearDown() {
    }
    
    //Both test now pass issue was with how simulator was set up
    // by disconnecting the keyboard of the mac the first responder will change
    
    func testLogin() {
        login()
        sleep(5)
        
        XCTAssertTrue(app.staticTexts["Dashboard"].exists)
    }
    
    func testViewTransactions() {
        loginTwo()
        sleep(5)
        
        app.staticTexts["View Transactions"].tap()
        XCTAssertTrue(app.staticTexts["Transactions"].exists)
    }
    
    private func login() {
        app.buttons["Sign In"].tap()
        
        app.textFields.firstMatch.tap()
        app.typeText("email@example.com")
        app.secureTextFields.firstMatch.tap()
        
        app.typeText("password")
        app.keyboards.buttons["Return"].tap()
        
        app.buttons.matching(identifier: "Sign In").element(boundBy: 1).tap()
    }
    
    
    private func loginTwo() {
        app.buttons["Sign In"].tap()
        
        app.textFields.firstMatch.tap()
        app.typeText("realemail@gmail.com")
        app.secureTextFields.firstMatch.tap()
        
        app.typeText("1234")
        app.keyboards.buttons["Return"].tap()
        
        app.buttons.matching(identifier: "Sign In").element(boundBy: 1).tap()
    }
   
    
    
    private func logout() {
        app.buttons["Sign out"].tap()
    }
    
    func testSwitchingAccounts() {
        login()
        sleep(3)
        
        logout()
        
        loginTwo()
        sleep(3)
    }
    
    func testAddExpense() {
        
        app.launch()
        loginTwo()
        
        app.staticTexts["Add an expense"].tap()
        
        AmountTF.tap()
        AmountTF.typeText("20.00")
        
        DateTF.tap()
        DateTF.typeText("03/26/2020")
        
        CategoryTF.tap()
        CatCell.staticTexts["Food and Drink"].tap()
        
        SaveButton.tap()

    }
    
    // test to see if the CategoryCells are showing up
    func testCategoryCellsExist() {
        app.launch()
        loginTwo()
        
        app.staticTexts["Food and Drink"].tap()
    }
    
    func testAddIncome() {
        app.launch()
        
        loginTwo()
        
        app.staticTexts["Add income"].tap()
        
        AmountTF.tap()
        AmountTF.typeText("24.50")
        
        DateTF.tap()
        DateTF.typeText("04/17/2020")
        
        CategoryTF.tap()
        CatCell.staticTexts["Food and Drink"].tap()
        
        SaveButton.tap()
    }
    
    func testAddCustomCategory() {
        app.launch()
        
        loginTwo()
        
        app.buttons["plus"].tap()
        
        app.buttons["plus"].tap()
        addUIInterruptionMonitor(withDescription: "DashBoard") { (textField) -> Bool in
            let customTF = textField.textFields.otherElements.firstMatch
            if customTF.exists {
                textField.tap()
                textField.typeText("Palidan Things")
            } else {
                return false
            }
            textField.tap()
            textField.typeText("Palidan Things")
            return true
        }
    }
}
