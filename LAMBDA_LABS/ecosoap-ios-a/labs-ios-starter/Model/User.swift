//
//  User.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/28/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import Foundation

struct Data: Codable {
    var data: [User]
}

struct User: Codable {
    var firstName: String
    var middleName: String?
    var lastName: String
    var email: String
    var phone: String
    var skype: String
}

//// MARK: - Empty
//struct Empty: Codable {
//    let mPfZ09AUTcOJMDShGE: MPfZ09AUTcOJMDShGE
//
//    enum CodingKeys: String, CodingKey {
//        case mPfZ09AUTcOJMDShGE = "-MPfZ09AUTcO_JMDShGE"
//    }
//}
//
//// MARK: - MPfZ09AUTcOJMDShGE
//struct MPfZ09AUTcOJMDShGE: Codable {
//    let data: DataClass
//}
//
//// MARK: - DataClass
//struct DataClass: Codable {
//    let users: [User]
//}
//
//// MARK: - User
//struct User: Codable {
//    let email, firstName, id, lastName: String
//    let middleName, phone, role, skype: String
//}
