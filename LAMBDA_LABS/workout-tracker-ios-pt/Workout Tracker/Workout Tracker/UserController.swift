//
//  UserController.swift
//  Workout Tracker
//
//  Created by Stephanie Bowles on 3/24/20.
//  Copyright © 2020 LambdaLabsPT7. All rights reserved.
//

import UIKit



class UserController {
    private let baseURL = URL(string: "https://frozen-hamlet-18508.herokuapp.com/")!
    
    func signUp(username: String, email: String, userpassword: String, completion: @escaping (Error?) -> Void = {_ in}) {
        let signUpURL = baseURL.appendingPathComponent("users")
        
        var request = URLRequest(url: signUpURL)
        request.httpMethod = HTTPMethod.post.rawValue
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        
        let userParams = ["username": username, "email": email, "userpassword": userpassword] as [String: Any]
        do {
            let json = try JSONSerialization.data(withJSONObject: userParams, options: .prettyPrinted)
            request.httpBody = json
            print(json)
        } catch {
            NSLog("Error encoding JSON")
            return
        }
        URLSession.shared.dataTask(with: request) { _, response, error in
            if let response = response as? HTTPURLResponse,
                response.statusCode != 201 {
                DispatchQueue.main.async {
                completion(NSError(domain:"", code: response.statusCode, userInfo: nil))
                }
                return
            }
            if let error = error {
                DispatchQueue.main.async {
                completion(error)
                }
                return
            }
            NSLog("Successfully signed up User")
            //                self.logIn(email: email, password: password, completion: completion)
            
            completion(nil)
        } .resume()
    }
    func logIn(username: String, userpassword: String, completion: @escaping (NetworkError?) -> Void) {
        
        let logInURL = baseURL.appendingPathComponent("users/login")
        var request = URLRequest(url: logInURL)
        request.httpMethod = HTTPMethod.post.rawValue
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        let userParams = ["username": username, "userpassword": userpassword] as [String: Any]
        do {
            let json = try JSONSerialization.data(withJSONObject: userParams, options: .prettyPrinted)
            request.httpBody = json
        } catch {
            NSLog("Error encoding JSON")
        }
        
        URLSession.shared.dataTask(with: request) {(data, response, error) in
            if let response = response as? HTTPURLResponse,
                response.statusCode != 200 {
                DispatchQueue.main.async {
                completion(.badAuth)
                }
                return
            }
            if let _ = error {
                DispatchQueue.main.async {
                completion(.otherError)
                }
                return
            }
//            guard let data = data else {
//                completion(.badData)
//                return
//            }
//            do {
//
//                let bearer = try JSONDecoder().decode(Bearer.self, from: data)
//
//                let _ = try decode(jwt: bearer.token)
//
//                self.bearer = bearer
//            } catch {
//                NSLog("Error decoding JSON Web token" )
//                return
//            }
            NSLog("successfully logged in user")
            completion(nil)
            
        } .resume()
        
    }
}
