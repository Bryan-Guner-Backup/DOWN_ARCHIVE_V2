//
//  Cache.swift
//  labs-ios-starter
//
//  Created by Conner on 2/22/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import Foundation

class Cache<Key: Hashable, Value> {
    
    private var items: [Key: Value] = [:]
    private let queue: DispatchQueue = .init(label: "com.LambdaSchool.LabsScaffolding.cityQueue")
    
    func cache(value: Value, for key: Key) {
        queue.sync {
            items[key] = value
        }
    }
    
    func value(for key: Key) -> Value? {
        queue.sync {
            items[key]
        }
    }
}
