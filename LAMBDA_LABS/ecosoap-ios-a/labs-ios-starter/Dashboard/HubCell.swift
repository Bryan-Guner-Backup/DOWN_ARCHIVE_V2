//
//  HubCell.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/21/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

protocol ReusableView: AnyObject {
    static var identifier: String { get }
}

final class HubCell: UICollectionViewCell {
    
}

extension HubCell: ReusableView {
    static var identifier: String {
        return String(describing: self)
    }
}
