//
//  UIViewController.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/23/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

extension UIViewController {
    func configureGradientLayer() {
        let gradient = CAGradientLayer()
        gradient.colors = [UIColor.esbGreen?.lighter(componentDelta: 0.4).cgColor, UIColor.esbGreen?.cgColor]
        gradient.locations = [0, 1]
        view.layer.addSublayer(gradient)
        gradient.frame = view.frame
    }
}
