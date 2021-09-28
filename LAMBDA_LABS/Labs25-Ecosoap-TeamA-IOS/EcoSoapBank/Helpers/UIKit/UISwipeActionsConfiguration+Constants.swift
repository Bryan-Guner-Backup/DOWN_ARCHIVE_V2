//
//  UISwipeActionsConfiguration+Constants.swift
//  EcoSoapBank
//
//  Created by Jon Bash on 2020-08-21.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit


extension UISwipeActionsConfiguration {
    /// A swipe action configuration for deletion of cell content.
    static func remove(_ deleteHandler: @escaping UIContextualAction.Handler
    ) -> UISwipeActionsConfiguration {
        let delete = UIContextualAction(
            style: .destructive,
            title: "Remove",
            handler: deleteHandler)
        delete.backgroundColor = .systemRed

        let config = UISwipeActionsConfiguration(actions: [delete])
        config.performsFirstActionWithFullSwipe = true

        return config
    }
}
