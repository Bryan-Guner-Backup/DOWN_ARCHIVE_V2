//
//  ProfileCoordinator.swift
//  EcoSoapBank
//
//  Created by Jon Bash on 2020-08-31.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit
import SwiftUI
import Combine


/// The object to handle logging out on behalf of the `Profile` module.
protocol ProfileDelegate: AnyObject {
    /// Log the user out and enable logging in as a different user.
    func logOut()
}


class ProfileCoordinator: FlowCoordinator {
    lazy var rootVC: UIViewController = UIHostingController(rootView: MainProfileView()
        .environmentObject(profileVM))

    private(set) lazy var profileVM: ProfileViewModel = ProfileViewModel(
        user: user,
        userController: userController,
        delegate: delegate)

    private var user: User
    private var userController: UserController

    weak var delegate: ProfileDelegate?

    private var cancellables = Set<AnyCancellable>()

    init(user: User,
         userController: UserController,
         delegate: ProfileDelegate?
    ) {
        self.user = user
        self.userController = userController
        self.delegate = delegate
    }

    func start() {
        rootVC.tabBarItem = UITabBarItem(
            title: "Profile",
            image: UIImage(
                systemName: "person.circle",
                withConfiguration: UIImage.SymbolConfiguration(
                    pointSize: 22,
                    weight: .regular)),
            tag: 4)
    }
}
