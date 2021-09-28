//
//  Images.swift
//  EcoSoapBank
//
//  Created by Shawn Gee on 8/17/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

extension UIImage {
    static let esbLogo = UIImage(named: "esbLogo")!
    static let esbLogoWhite = UIImage(named: "esbLogoWhite")!
    
    static let addBoxSymbol = UIImage(named: "cube.box.plus")!
    static let navBar = UIImage(named: "newNavBar")!
    
    static let soap = UIImage(named: "soap")!
    static let bottles = UIImage(named: "bottles")!
    static let linens = UIImage(named: "linens")!
    static let paper = UIImage(named: "paper")!
    static let people = UIImage(named: "people")!
    static let women = UIImage(named: "women")!

    static let plusSquareFill = UIImage(systemName: "plus.square.fill")!
    static let cubeBox = UIImage(systemName: "cube.box")!
    static let cubeBoxFill = UIImage(systemName: "cube.box.fill")!
    static let creditCard = UIImage(systemName: "creditcard")

    func withAlpha(_ alpha: CGFloat) -> UIImage? {
        UIGraphicsBeginImageContextWithOptions(size, false, scale)
        draw(at: .zero, blendMode: .normal, alpha: alpha)
        let newImg = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        return newImg
    }

    func scaled(to newSize: CGSize) -> UIImage? {
        UIGraphicsBeginImageContextWithOptions(newSize, false, 0.0)
        defer { UIGraphicsEndImageContext() }
        draw(in: CGRect(x: 0, y: 0, width: newSize.width, height: newSize.height))
        return UIGraphicsGetImageFromCurrentImageContext()
    }

    func scaled(toNewHeight newHeight: CGFloat) -> UIImage? {
        let scale = size.height / newHeight
        let newSize = CGSize(width: size.width / scale, height: newHeight)
        return self.scaled(to: newSize)
    }
}
