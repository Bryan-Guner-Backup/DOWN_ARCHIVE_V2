//
//  LoginViewController.swift
//  LabsScaffolding
//
//  Created by Spencer Curtis on 7/23/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit
import OktaAuth

class LoginViewController: UIViewController {
    
    let profileController = ProfileController.shared
    
    var authSuccessfulObserver: NSObjectProtocol?
    var authExpiredObserver: NSObjectProtocol?

    override func viewDidLoad() {
        super.viewDidLoad()
        
        authSuccessfulObserver = NotificationCenter.default.addObserver(forName: .oktaAuthenticationSuccessful,
                                                                        object: nil,
                                                                        queue: .main,
                                                                        using: checkForExistingProfile)
        
        authExpiredObserver = NotificationCenter.default.addObserver(forName: .oktaAuthenticationExpired,
                                                                     object: nil,
                                                                     queue: .main,
                                                                     using: alertUserOfExpiredCredentials)
    }
    
    deinit {
        NotificationCenter.default.removeObserver(authSuccessfulObserver as Any)
        NotificationCenter.default.removeObserver(authExpiredObserver as Any)
    }

    // MARK: - Actions
    @IBAction func signIn(_ sender: Any) {
        UIApplication.shared.open(ProfileController.shared.oktaAuth.identityAuthURL()!)
    }
    
    // MARK: - Private Methods
    
    private func alertUserOfExpiredCredentials(_ notification: Notification) {
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.presentSimpleAlert(with: "Your Okta credentials have expired",
                                    message: "Please sign in again",
                                    preferredStyle: .alert,
                                    dismissText: "Dimiss")
        }
    }
    
    // MARK: Notification Handling
    
    private func checkForExistingProfile(with notification: Notification) {
        checkForExistingProfile()
    }
    
    private func checkForExistingProfile() {
        
        profileController.checkForExistingAuthenticatedUserProfile { [weak self] _ in
            
            guard let self = self,
                self.presentedViewController == nil else { return }
            DispatchQueue.main.async {
                self.performSegue(withIdentifier: "ShowDetailProfileList", sender: nil)
            }
        }
    }
    
}
