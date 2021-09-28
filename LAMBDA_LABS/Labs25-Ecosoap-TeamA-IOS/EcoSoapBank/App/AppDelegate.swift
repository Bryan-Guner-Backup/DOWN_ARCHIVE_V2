//
//  AppDelegate.swift
//  LabsScaffolding
//
//  Created by Spencer Curtis on 6/17/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit
import SwiftUI
import Stripe


@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        Stripe.setDefaultPublishableKey("pk_test_51HLF1UKa1YnGlDrRQFihKS3jQGrbOCryI29gKBdXLJUt3lWKaKTRTjhBXxsIFV4xQiCh15gYM4PiJwQaaiN6BiHk00blUGhoiG")
        setUpAppAppearance()
        return true
    }

    // MARK: UISceneSession Lifecycle

    func application(
        _ application: UIApplication,
        configurationForConnecting connectingSceneSession: UISceneSession,
        options: UIScene.ConnectionOptions
    ) -> UISceneConfiguration {
        // Called when a new scene session is being created.
        // Use this method to select a configuration to create the new scene with.
        UISceneConfiguration(name: "Default Configuration",
                             sessionRole: connectingSceneSession.role)
    }

    private func setUpAppAppearance() {
        
        configure(UIBarButtonItem.appearance()) {
            $0.tintColor = .barButtonTint
            $0.setTitleTextAttributes(
                [.font: UIFont.barButtonItem],
                for: .normal)
        }
        
        configure(UIButton.appearance()) {
            $0.tintColor = .barButtonTint
        }
        
        configure(UINavigationBar.appearance()) { nav in
            nav.standardAppearance = configure(UINavigationBarAppearance()) {
                $0.backgroundImage = UIImage.navBar
                $0.titleTextAttributes = [
                    .font: UIFont.navBarInlineTitle,
                    .foregroundColor: UIColor.black
                ]
                
                let textAttributes: [NSAttributedString.Key: Any] = [.font: UIFont.barButtonItem]
                $0.backButtonAppearance.normal.titleTextAttributes = textAttributes
                $0.doneButtonAppearance.normal.titleTextAttributes = textAttributes
            }
            nav.compactAppearance = configure(UINavigationBarAppearance()) {
                $0.backgroundImage = UIImage.navBar
                $0.titleTextAttributes = [
                    .font: UIFont.navBarInlineTitle,
                    .foregroundColor: UIColor.black
                ]
            }
            nav.scrollEdgeAppearance = configure(UINavigationBarAppearance()) {
                $0.configureWithTransparentBackground()
                $0.largeTitleTextAttributes = [
                    .font: UIFont.navBarLargeTitle,
                ]
            }
        }
        
        configure(UIPickerView.appearance()) {
            $0.backgroundColor = .systemGray4
        }
        
        configure(UISlider.appearance()) {
            $0.tintColor = .downyBlue
            $0.minimumTrackTintColor = .downyBlue
        }
        
        configure(UITabBar.appearance()) {
            $0.tintColor = .esbGreen
            $0.barTintColor = .systemGray5
        }

        configure(UITableView.appearance()) {
            $0.backgroundColor = .systemGray5
            $0.separatorColor = UIColor.esbSeparator
        }
        
        configure(UITableViewCell.appearance()) {
            $0.backgroundColor = .tableViewCellBackground
        }
    }
}
