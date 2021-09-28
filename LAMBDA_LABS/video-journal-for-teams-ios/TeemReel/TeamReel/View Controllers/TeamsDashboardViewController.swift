//
//  TeamsDashboardViewController.swift
//  TeamReel
//
//  Created by scott harris on 6/16/20.
//  Copyright © 2020 scott harris. All rights reserved.
//

import UIKit

class TeamsDashboardViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchTeamUsers()
        fetchTeamPrompts()
        self.setupHeaderView()
        self.setupCollectionView()
        
    }
    
    let apiClient = ApiClient()
    var apiController: APIController?
    var prompts: [Prompt] = []
    var videos: [Video] = []
    var team: Team?
    let headerView = TeamHeaderView()
    var users: [TeamUser]?
    var apiToken: String?
    
    lazy var collectionView: UICollectionView = {
        let collectionView: UICollectionView = UICollectionView(frame: CGRect.zero, collectionViewLayout: self.makeLayout())
        collectionView.backgroundColor = .systemBackground
        collectionView.dataSource = self
        collectionView.delegate = self
        
        
        collectionView.register(PromptCompositionalCell.self, forCellWithReuseIdentifier: "PromptCell")
        collectionView.register(VideoCell.self, forCellWithReuseIdentifier: "VideoCell")
        collectionView.register(HeaderView.self, forSupplementaryViewOfKind: "header", withReuseIdentifier: "HeaderView")
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        return collectionView
    }()
    
    func makeLayout() -> UICollectionViewLayout {
        let layout = UICollectionViewCompositionalLayout { (section: Int, environment: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection? in
            if section == 0 {
                return self.makeHorizontalList()
            } else {
                return self.makeHorizontalRow(width: 164, height: 164)
            }
            
        }
        
        return layout
    }
    
    func makeHorizontalRow(width: CGFloat, height: CGFloat) -> NSCollectionLayoutSection {
        let item = NSCollectionLayoutItem(layoutSize: NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .fractionalHeight(1.0)))
        item.contentInsets = NSDirectionalEdgeInsets(top: 0.0, leading: 0.0, bottom: 0.0, trailing: 8.0)
        
        let group = NSCollectionLayoutGroup.vertical(layoutSize: NSCollectionLayoutSize(widthDimension: .estimated(width + item.contentInsets.trailing), heightDimension: .estimated(height)), subitem: item, count: 1)
        
        let section = NSCollectionLayoutSection(group: group)
        section.contentInsets = NSDirectionalEdgeInsets(top: 4.0, leading: 8.0, bottom: 16.0, trailing: 0.0)
        section.orthogonalScrollingBehavior = .continuousGroupLeadingBoundary
        
        let headerSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .estimated(44))
        let headerElement = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerSize, elementKind: "header", alignment: .top)
        section.boundarySupplementaryItems = [headerElement]
        
        return section
    }
    
    func makeHorizontalList() -> NSCollectionLayoutSection {
        let item = NSCollectionLayoutItem(layoutSize: NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .fractionalHeight(1.0)))
        
        item.contentInsets = NSDirectionalEdgeInsets(top: 4.0, leading: 0.0, bottom: 0.0, trailing: 8.0)
        let group = NSCollectionLayoutGroup.vertical(layoutSize: NSCollectionLayoutSize(widthDimension: .fractionalWidth(0.9), heightDimension: .fractionalHeight(0.45)), subitem: item, count: 4)
        let section = NSCollectionLayoutSection(group: group)
        section.contentInsets = NSDirectionalEdgeInsets(top: 4.0, leading: 8.0, bottom: 16.0, trailing: 0.0)
        section.orthogonalScrollingBehavior = .continuousGroupLeadingBoundary
        
        let headerSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .estimated(44))
        let headerElement = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerSize, elementKind: "header", alignment: .top)
        section.boundarySupplementaryItems = [headerElement]
        
        return section
    }
    
    private func setupHeaderView() {
        view.addSubview(headerView)
        headerView.team = team
        if let users = users {
            headerView.users = users
        }
        headerView.translatesAutoresizingMaskIntoConstraints = false
        headerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
        headerView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
        headerView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
        headerView.heightAnchor.constraint(equalTo: view.safeAreaLayoutGuide.heightAnchor, multiplier: 1 / 5).isActive = true
    }
    
    private func setupCollectionView() {
        self.view.addSubview(self.collectionView)
        NSLayoutConstraint.activate([
            self.collectionView.topAnchor.constraint(equalTo: headerView.bottomAnchor),
            self.collectionView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor),
            self.collectionView.leftAnchor.constraint(equalTo: self.view.leftAnchor),
            self.collectionView.rightAnchor.constraint(equalTo: self.view.rightAnchor)
        ])
    }
    
    private func fetchTeamUsers() {
        guard let team = team, let token = apiToken else { return }
        
        apiClient.fetchTeamUsers(for: team.id, token: token) { (users, error) in
            if let error = error {
                print("error recieved from network: \(error)")
                return
            }
            
            if let users = users {
                self.users = users
                
            }
            
            DispatchQueue.main.async {
                self.updateViews()
            }
        }
        
    }
    
    private func fetchTeamPrompts() {
        guard let team = team, let token = apiToken else { return }
        
        apiClient.fetchTeamVideos(for: team.id, token: token) { (prompts, error) in
            if let error = error {
                print("error recieved from network: \(error)")
                return
            }
            
            if let prompts = prompts {
                self.prompts = prompts
                for prompt in prompts {
                    if let videos = prompt.videos {
                        self.videos.append(contentsOf: videos)
                        
                    }
                }
                
            }
            
            DispatchQueue.main.async {
                self.updateViews()
                self.collectionView.reloadData()
            }

        }
        
    }
    
    private func updateViews() {
        headerView.team = team
        if let users = users {
            headerView.users = users
        }
    }

}


extension TeamsDashboardViewController: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 2
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        if section == 0 {
            return prompts.count
        } else if section == 1 {
            return videos.count
        }
        
        return 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if indexPath.section == 0 {
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "PromptCell", for: indexPath) as? PromptCompositionalCell else { return UICollectionViewCell() }
            
            let prompt = prompts[indexPath.item]
            cell.prompt = prompt
            if let team = team {
                cell.team = team
                cell.teamNameLabel.text = team.name
                cell.questionLabel.text = prompt.question
            } else {
                cell.teamNameLabel.text = "The office"
                cell.questionLabel.text = prompt.question
            }
            return cell
            
        }
        
        if indexPath.section == 1 {
            guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "VideoCell", for: indexPath) as? VideoCell else { return UICollectionViewCell() }
            
            let video = videos[indexPath.item]
            DispatchQueue.global(qos: .userInitiated).async {
                let image = Utilities.createThumbnailOfVideoFromRemoteUrl(url: "https://alpaca-vids-storage.s3-us-west-1.amazonaws.com/\(video.videoURL)")
                DispatchQueue.main.async {
                    cell.imageView.image = image
                }
            }
            
            return cell
            
        }
        
        return UICollectionViewCell()
        
    }
    
    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        
        guard let view = collectionView.dequeueReusableSupplementaryView(ofKind: "header", withReuseIdentifier: "HeaderView", for: indexPath) as? HeaderView else { return HeaderView() }
        
        if indexPath.section == 0 {
            view.type = "Prompts"
            view.viewAllButton.addTarget(self, action: #selector(viewAllPromptsTapped), for: .touchUpInside)
        } else if indexPath.section == 1 {
            view.type = "Videos"
        }
        
        
        return view
    }
    
    @objc func viewAllPromptsTapped() {
        let promptVC = PromptsCollectionViewController()
        promptVC.apiController = apiController
        promptVC.prompts = prompts
        navigationController?.pushViewController(promptVC, animated: true)
        
    }
}

extension TeamsDashboardViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let section = indexPath.section
        if section == 0 {
            print("Its a prompt!!")
            let prompt = prompts[indexPath.item]
            let promptVC = PromptsCollectionViewController()
            promptVC.apiController = apiController
            promptVC.prompts = [prompt]
            navigationController?.pushViewController(promptVC, animated: true)
            
        }
        
        if section == 1 {
            let video = videos[indexPath.item]
            let playerVC = PromptResponseViewController()
//            let playerVC = VideoReponseViewController()
            navigationController?.pushViewController(playerVC, animated: true)
            let url = URL(string: "https://alpaca-vids-storage.s3-us-west-1.amazonaws.com/\(video.videoURL)")
            playerVC.videoURL = url
            playerVC.video = video
            
        }
    }
}
