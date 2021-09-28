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
    
    // MARK: - Properties -
    
    let profileController = ProfileController.shared
    
    private let ecoSoapBankLogo: UIImageView = {
        let imageView = UIImageView()
        imageView.image = UIImage(named: "ecoSoapBankLogo")
        return imageView
    }()
    
    private let missionStatementTextLabel: UILabel = {
        let label = UILabel()
        label.text = "Our Mission:\n\n" + "Saving, sanitizing, and supplying\n\n" + "RECYCLED SOAP\n\n" + "for the developing world!"
        label.textColor = UIColor.black
        label.font = UIFont.init(name: "Verdana", size: 18)
        label.numberOfLines = 0
        return label
    }()
    
    private let dontHaveAccountButton: UIButton = {
        let button = UIButton(type: .system)
        let attributedTitle = NSMutableAttributedString(string: "Don't have an account?  ",
                                                        attributes: [.font : UIFont.systemFont(ofSize: 16), .foregroundColor : UIColor.black])
        attributedTitle.append(NSAttributedString(string: "Sign Up",
                                                  attributes: [.font : UIFont.boldSystemFont(ofSize: 16), .foregroundColor : UIColor.black]))
        
        button.setAttributedTitle(attributedTitle, for: .normal)
        button.addTarget(self, action: #selector(handleShowSignUp), for: .touchUpInside)
        
        return button
    }()
    
    private let loginButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Log In", for: .normal)
        button.setTitleColor(UIColor.esbGreen?.lighter(), for: .normal)
        button.titleLabel?.font = .systemFont(ofSize: 25)
        button.setHeight(height: 40)
        button.backgroundColor = .black
        button.layer.cornerRadius = 8.0
        button.layer.borderColor = UIColor.black.cgColor
        button.layer.borderWidth = 1.0
        return button
    }()
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        .darkContent
    }
    
    // MARK: - LifeCycle Functions -
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureUI()
        
        NotificationCenter.default.addObserver(forName: .oktaAuthenticationSuccessful,
                                               object: nil,
                                               queue: .main,
                                               using: checkForExistingProfile)
        
        NotificationCenter.default.addObserver(forName: .oktaAuthenticationExpired,
                                               object: nil,
                                               queue: .main,
                                               using: alertUserOfExpiredCredentials)
    }
    
    // MARK: - Actions -
    
    @objc func handleShowSignUp() {
        
    }
    
    @objc func logInButtonTapped() {
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

    // MARK: - UI Configuration Methods -
    
    private func configureUI() {
        navigationController?.navigationBar.isHidden = true
        
        configureGradientLayer()
        
        view.addSubview(ecoSoapBankLogo)
        ecoSoapBankLogo.centerX(inView: view)
        ecoSoapBankLogo.anchor(top: view.safeAreaLayoutGuide.topAnchor, paddingTop: 30)
        ecoSoapBankLogo.setDimensions(height: 140, width: 150)
        
        UIHelper.configureShadow(view: ecoSoapBankLogo, color: UIColor.black.cgColor)
        
        view.addSubview(missionStatementTextLabel)
        missionStatementTextLabel.anchor(top: ecoSoapBankLogo.bottomAnchor, left: view.leftAnchor, paddingTop: 30, paddingLeft: 55, paddingRight: 45, width: 300, height: 200)
        
        view.addSubview(loginButton)
        loginButton.anchor(top: missionStatementTextLabel.bottomAnchor, left: view.leftAnchor, right: view.rightAnchor, paddingTop: 120, paddingLeft: 90, paddingRight: 90)
        loginButton.addTarget(self, action: #selector(logInButtonTapped), for: .touchUpInside)
        
        view.addSubview(dontHaveAccountButton)
        dontHaveAccountButton.anchor(left: view.leftAnchor, bottom: view.safeAreaLayoutGuide.bottomAnchor, right: view.rightAnchor, paddingLeft: 32, paddingRight: 32)
    }
    
    // MARK: Notification Handling
    
    private func checkForExistingProfile(with notification: Notification) {
        checkForExistingProfile()
    }
    
    private func checkForExistingProfile() {
        profileController.checkForExistingAuthenticatedUserProfile { [weak self] (exists) in
            
            guard let self = self,
                  self.presentedViewController == nil else { return }
            
            if exists {
                self.performSegue(withIdentifier: "ShowDetailProfileList", sender: nil)
            } else {
                self.performSegue(withIdentifier: "ModalAddProfile", sender: nil)
            }
        }
    }
    
    // MARK: - Navigation
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "ModalAddProfile" {
            guard let addProfileVC = segue.destination as? AddProfileViewController else { return }
            addProfileVC.delegate = self
        }
    }
}

// MARK: - Add Profile Delegate

extension LoginViewController: AddProfileDelegate {
    func profileWasAdded() {
        checkForExistingProfile()
    }
}
