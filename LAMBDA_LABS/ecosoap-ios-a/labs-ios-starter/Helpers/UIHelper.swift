//
//  Helper.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/8/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

class UIHelper {

    static func configureShadow(view: UIView, color: CGColor) {
        view.layer.shadowColor = color
        view.layer.shadowOffset = CGSize(width: 5.0, height: 5.0)
        view.layer.shadowRadius = 5.0
        view.layer.shadowOpacity = 1.0
    }
}
