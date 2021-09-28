//
//  ConcurrentOperation.swift
//  labs-ios-starter
//
//  Created by Conner on 2/22/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import Foundation

class ConcurrentOperation: Operation {
    enum State: String {
        case isReady, isExecuting, isFinished
    }
    
    private var currentState = State.isReady
    
    private let stateQueue = DispatchQueue(label: "com.LambdaSchool.LabsScaffolding.ConcurrentOperationStateQueue")
    
    var state: State {
        get {
            var result: State?
            self.stateQueue.sync { result = currentState }
            return result!
        }
        
        set {
            let oldValue = state
            willChangeValue(forKey: newValue.rawValue)
            willChangeValue(forKey: oldValue.rawValue)
            stateQueue.sync { self.currentState = newValue }
            didChangeValue(forKey: oldValue.rawValue)
            didChangeValue(forKey: newValue.rawValue)
        }
    }
    
    override dynamic var isReady: Bool {
        return super.isReady && state == .isReady
    }
    
    override dynamic var isExecuting: Bool {
        return state == .isExecuting
    }
    
    override dynamic var isFinished: Bool {
        return state == .isFinished
    }
    
    override var isAsynchronous: Bool {
        return true
    }
}
