//
//  FetchImageOperation.swift
//  labs-ios-starter
//
//  Created by Conner on 2/22/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import Foundation

class FetchImageOperation: ConcurrentOperation {
    
    let photoReference: String
    var imageData: Data?
    private var dataTask: URLSessionDataTask?
    
    init(photoReference: String) {
        self.photoReference = photoReference
    }
    
    override func start() {
        state = .isExecuting
        
        var components = URLComponents(string: "https://maps.googleapis.com/maps/api/place/photo")!
        
        components.queryItems = [URLQueryItem(name: "key", value: "AIzaSyAF_RSxBaOS7dq62VJJO2p-bX718q3P2lM"),
                                    URLQueryItem(name: "photoreference", value: photoReference),
                                    URLQueryItem(name: "maxwidth", value: "1200"),
                                    URLQueryItem(name: "maxheight", value: "1200")
                  ]
        
        var request = URLRequest(url: components.url!)
        request.httpMethod = "GET"
        
        dataTask = URLSession.shared.dataTask(with: request) { data, response, error in
            defer { self.state = .isFinished }
            guard error == nil else {
                NSLog("FetchImageOperation.start() Error: \(error!)")
                return
            }
            
            if let response = response as? HTTPURLResponse {
                if response.statusCode != 200 {
                    NSLog("FetchImageOperation.start(): Unexpected response code \(response.statusCode)")
                }
            }
            
            if let data = data {
                self.imageData = data
            } else {
                NSLog("FetchImageOperation.start(): no data received.")
            }
        }
        
        dataTask?.resume()
    }
    
    override func cancel() { dataTask?.cancel() }
}
