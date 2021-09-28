//
//  DashboardViewController.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/8/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

class DashboardViewController: UIViewController {
    
    // MARK: - Properties -
    lazy var myProfileButton = dashboardButtons[0]
    lazy var allHubsButton = dashboardButtons[1]
    lazy var partnershipsButton = dashboardButtons[2]
    lazy var corporateSponsorsButton = dashboardButtons[3]
    lazy var ngoSponsorsButton = dashboardButtons[4]

    private let welcomeUserTextLabel: UILabel = {
        let label = UILabel()
        label.textColor = UIColor.black
        label.textAlignment = .center
        label.font = UIFont.init(name: "Verdana", size: 30)
        return label
    }()
    
    private let dashboardButtonsVerticalStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.distribution = .fillEqually
        stackView.spacing = 8
        return stackView
    }()
    
    private let middleHorizontalStackView: UIStackView = {
       let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        stackView.spacing = 8
        return stackView
    }()
    
    private let bottomHorizontalStackView: UIStackView = {
       let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        stackView.spacing = 8
        return stackView
    }()
    
    private var dashboardButtons = [UIButton]()
    
    let ecoSoapBankApiController = EcoSoapBankApiController()
    var user: User?
    
    // MARK: - LifeCycle Functions -
    override func viewDidLoad() {
        super.viewDidLoad()
        configureUI()
        guard let user = self.user else { return }
        ecoSoapBankApiController.fetchUserDetails(user.firstName) { _ in
        }
//        self.ecoSoapBankApiController.fetchUserDetails(with: user) { _ in
//            DispatchQueue.main.async { self.welcomeUserTextLabel.text = "Welcome \(self.ecoSoapBankApiController.users.first?.firstName ?? "User")" }
//        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(true)
        navigationController?.navigationBar.isHidden = true
    }
    
    // MARK: - Selectors -
    @objc func myProfileButtonTapped(_ sender: UIButton!) {
        navigationController?.pushViewController(MyProfileViewController(), animated: true)
        print("My Profile Button tapped")
    }
    
    @objc func allHubsButtonTapped(_ sender: UIButton!) {
        navigationController?.pushViewController(AllHubsViewController(), animated: true)
        print("All Hubs Button Tapped")
    }
    
    @objc func partnershipsButtonTapped(_ sender: UIButton!) {
        navigationController?.pushViewController(PartnershipsViewController(), animated: true)
        print("Partnerships Button Tapped")
    }

    @objc func corporateSponsorsButtonTapped(_ sender: UIButton!) {
        navigationController?.pushViewController(CorporateSponsorsViewController(), animated: true)
        print("Corporate Sponsors Button Tapped")
    }
    
    @objc func ngoSponsorsButtonTapped(_ sender: UIButton!) {
        navigationController?.pushViewController(NGOSponsorsViewController(), animated: true)
        print("NGO Sponsors Button Tapped")
    }
    
    // MARK: - Helper Functions -
    private func configureUI() {
        navigationController?.navigationBar.isHidden = true
        
        configureGradientLayer()
        dashboardButtons = buttonSetup()
        
        view.addSubviews(subviews: welcomeUserTextLabel,dashboardButtonsVerticalStackView, middleHorizontalStackView, bottomHorizontalStackView, myProfileButton, allHubsButton, partnershipsButton, corporateSponsorsButton, ngoSponsorsButton)
        
        welcomeUserTextLabel.text = "Welcome \(ecoSoapBankApiController.users.first?.firstName ?? "User")"
        
        myProfileButton.addTarget(self, action: #selector(myProfileButtonTapped(_:)), for: .touchUpInside)
        allHubsButton.addTarget(self, action: #selector(allHubsButtonTapped(_:)), for: .touchUpInside)
        partnershipsButton.addTarget(self, action: #selector(partnershipsButtonTapped(_:)), for: .touchUpInside)
        corporateSponsorsButton.addTarget(self, action: #selector(corporateSponsorsButtonTapped(_:)), for: .touchUpInside)
        ngoSponsorsButton.addTarget(self, action: #selector(ngoSponsorsButtonTapped(_:)), for: .touchUpInside)
        
        welcomeUserTextLabel.centerX(inView: view)
        welcomeUserTextLabel.anchor(top: view.safeAreaLayoutGuide.topAnchor, paddingTop: 20)
        welcomeUserTextLabel.setDimensions(height: 150, width: 250)
        
        dashboardButtonsVerticalStackView.addArrangedSubview(myProfileButton)
        
        middleHorizontalStackView.addArrangedSubview(allHubsButton)
        middleHorizontalStackView.addArrangedSubview(partnershipsButton)
        bottomHorizontalStackView.addArrangedSubview(corporateSponsorsButton)
        bottomHorizontalStackView.addArrangedSubview(ngoSponsorsButton)
        
        dashboardButtonsVerticalStackView.addArrangedSubview(middleHorizontalStackView)
        dashboardButtonsVerticalStackView.addArrangedSubview(bottomHorizontalStackView)
        
        dashboardButtonsVerticalStackView.anchor(top: welcomeUserTextLabel.bottomAnchor, left: view.leftAnchor, right: view.rightAnchor, paddingTop: 8, paddingLeft: 30, paddingRight: 30)
    }
    
    private func buttonSetup() -> [UIButton] {
        let titles = ["My Profile", "All Hubs", "Partnerships", "Corporate Sponsors", "NGO Sponsors"]
        var buttons = [UIButton]()
        titles.forEach {
            let button = UIButton()
            button.setTitle($0, for: .normal)
            button.setTitleColor(.black, for: .normal)
            button.setWidth(width: 190)
            button.setHeight(height: 120)
            button.layer.cornerRadius = 12.0
            button.layer.borderWidth = 2.0
            button.layer.borderColor = UIColor.black.cgColor
            button.titleLabel?.font = UIFont(name: "Futura", size: 16)
            UIHelper.configureShadow(view: button, color: UIColor.black.cgColor)
            buttons.append(button)
        }
            return buttons
    }
}
