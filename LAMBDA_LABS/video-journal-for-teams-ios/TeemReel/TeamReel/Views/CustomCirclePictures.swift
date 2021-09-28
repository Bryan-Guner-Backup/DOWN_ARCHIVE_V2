//
//  CustomCirclePictures.swift
//  TeamReel
//
//  Created by Elizabeth Wingate on 6/12/20.
//  Copyright © 2020 scott harris. All rights reserved.
//

import UIKit

// For the Circular Images in the dashboard. Just set the class in the main storyboard
class CustomCirclePictures: UIImageView {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        circularImage()
    }
    
    func circularImage() {
        layer.frame = layer.frame.insetBy(dx: 0, dy: 0)
        layer.borderColor = UIColor.white.cgColor
        layer.cornerRadius = frame.width / 2
        layer.masksToBounds = false
        layer.borderWidth = 2
        clipsToBounds = true
        contentMode = UIView.ContentMode.scaleAspectFill
    }
    
    override func didMoveToSuperview() {
        circularImage()
    }
}
