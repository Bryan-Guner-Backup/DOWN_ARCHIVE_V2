//
//  AllHubsViewController.swift
//  labs-ios-starter
//
//  Created by Stephanie Ballard on 12/18/20.
//  Copyright © 2020 Spencer Curtis. All rights reserved.
//

import UIKit

class AllHubsViewController: UIViewController {
    
    // MARK: - Properties -
    
    private let collectionView: UICollectionView = {
        let viewLayout = UICollectionViewFlowLayout()
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: viewLayout)
        collectionView.backgroundColor = UIColor.esbGreen?.lighter()
        return collectionView
    }()
    
    // MARK: - LifeCycle Functions -
    override func viewDidLoad() {
        super.viewDidLoad()
        configureUI()
        configureNavigationBar()
    }
    
    // MARK: - Helper Functions -
    
    private func configureUI() {
        navigationController?.navigationBar.isHidden = false
        
        configureGradientLayer()
        
        view.addSubviews(subviews: collectionView)
        
        collectionView.anchor(top: view.safeAreaLayoutGuide.topAnchor, left: view.safeAreaLayoutGuide.leftAnchor, bottom: view.safeAreaLayoutGuide.bottomAnchor, right: view.safeAreaLayoutGuide.rightAnchor)
        
        collectionView.dataSource = self
        collectionView.delegate = self
        collectionView.alwaysBounceVertical = true
        
        collectionView.register(HubCell.self, forCellWithReuseIdentifier: HubCell.identifier)
    }
    
    func configureNavigationBar() {
        let appearance = UINavigationBarAppearance()
        appearance.largeTitleTextAttributes = [.foregroundColor: UIColor.black]
        appearance.backgroundColor = UIColor.esbGreen?.lighter(componentDelta: 0.2)
        
        navigationController?.navigationBar.standardAppearance = appearance
        navigationController?.navigationBar.compactAppearance = appearance
        navigationController?.navigationBar.scrollEdgeAppearance = appearance
        
        navigationController?.navigationBar.prefersLargeTitles = true
        navigationItem.title = "All Hubs"
        navigationController?.navigationBar.tintColor = .black
        navigationController?.navigationBar.isTranslucent = true
    }
}

extension AllHubsViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 12
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: HubCell.identifier, for: indexPath) as? HubCell else { return UICollectionViewCell() }
        cell.contentView.backgroundColor = UIColor.esbGreen
        return cell
    }
}

extension AllHubsViewController: UICollectionViewDelegate {
    
}
