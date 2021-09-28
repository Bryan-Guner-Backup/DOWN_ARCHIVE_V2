//
//  GooglePlacesAPIHelpers.swift
//  labs-ios-starter
//
//  Created by Conner on 2/18/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import Foundation
import UIKit

func loadImage(urlRequest: URLRequest, completion: @escaping (UIImage?) -> () ) {
    
    URLSession.shared.dataTask(with: urlRequest) { (data, response, error) in
        if error != nil {
            NSLog("loadImage(): error: \(error!)")
            completion(nil)
            return
        }
        
        guard let response = response as? HTTPURLResponse else {
            NSLog("loadImage(): Response could not be casted to HTTPURLResponse")
            completion(nil)
            return
        }
        
        if response.statusCode != 200 {
            NSLog("loadImage(): Unexpected response code \(response.statusCode)")
            completion(nil)
            return
        }
        
        guard let data = data else {
            NSLog("loadImage(): Data is nil")
            completion(nil)
            return
        }
        
        completion(UIImage(data: data))
    }.resume()
}

func getPhotoReferenceForCity(cityName: String, completion: @escaping (String?) -> () ) {
    var urlComponents = URLComponents(string: "https://maps.googleapis.com/maps/api/place/")!
    urlComponents.queryItems = [URLQueryItem(name: "key", value: "AIzaSyAF_RSxBaOS7dq62VJJO2p-bX718q3P2lM"),
                                URLQueryItem(name: "input", value: cityName),
                                URLQueryItem(name: "inputtype", value: "textquery"),
                                URLQueryItem(name: "fields", value: "name,photos")
              ]
    
    var request = URLRequest(url: urlComponents.url!)
    request.httpMethod = "GET"
    request.url!.appendPathComponent("findplacefromtext/json")
    
    URLSession.shared.dataTask(with: request) { (data, response, error) in
        if let error = error {
            NSLog("requestImageForCity(): error: \(error)")
            completion(nil)
            return
        }
        
        var photoReference: String? = nil
        
        if let response = response as? HTTPURLResponse {
            if response.statusCode == 200 {
                guard let data = data else {
                    print("requestImageForCity(): API Response 200, but no data received.")
                    completion(nil)
                    return
                }
                
                do {
                    let decodedData = try JSONDecoder().decode(GoogleLocationQueryResults.self, from: data)
                    if decodedData.candidates.count > 0 && decodedData.candidates[0].photos.count > 0 {
                        photoReference = decodedData.candidates[0].photos[0].photo_reference
                    }
                    
                } catch {
                    print("requestImageForCity(): Error decoding hits from JSON.")
                    completion(nil)
                    return
                }
                
            } else {
                print("requestImageForCity(): Unexpected Response \(response.statusCode)")
                completion(nil)
                return
            }
        }
        completion(photoReference)
    }.resume()
}
