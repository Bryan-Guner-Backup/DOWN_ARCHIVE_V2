//
//  MyProfileDetailsViewController.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/21/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

class MyProfileDetailsViewController: UIViewController {
    
    // MARK: - Properties -
    private let saveButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Save", for: .normal)
        button.setTitleColor(UIColor.esbGreen?.lighter(), for: .normal)
        button.titleLabel?.font = .systemFont(ofSize: 25)
        button.setHeight(height: 40)
        button.backgroundColor = .black
        button.layer.cornerRadius = 8.0
        button.layer.borderColor = UIColor.black.cgColor
        button.layer.borderWidth = 1.0
        button.addTarget(self, action: #selector(saveButtonTapped), for: .touchUpInside)
        return button
    }()
    
    // MARK: - LifeCycle Functions -
    override func viewDidLoad() {
        super.viewDidLoad()
        configureUI()
        configureNavigationBar()
    }
    
    // MARK: - Selectors -
    @objc func saveButtonTapped() {
        navigationController?.popViewController(animated: true)
        print("Save Button tapped")
    }
    
    // MARK: - Helper Functions -
    private func configureUI() {
        navigationController?.navigationBar.isHidden = false
        
        configureGradientLayer()
        
        view.addSubviews(subviews: saveButton)
        
        // TODO: Change to real constraints
//        saveButton.centerX(inView: view)
//        saveButton.centerY(inView: view)
    }
    
    func configureNavigationBar() {
        let appearance = UINavigationBarAppearance()
        appearance.largeTitleTextAttributes = [.foregroundColor: UIColor.black]
        appearance.backgroundColor = UIColor.esbGreen?.lighter(componentDelta: 0.2)
        
        navigationController?.navigationBar.standardAppearance = appearance
        navigationController?.navigationBar.compactAppearance = appearance
        navigationController?.navigationBar.scrollEdgeAppearance = appearance
        
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "Edit Details"
        navigationController?.navigationBar.tintColor = .black
        navigationController?.navigationBar.isTranslucent = true
    }
}
