//
//  OverlayView.swift
//  labs-ios-starter
//
//  Created by Matthew Martindale on 1/25/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import UIKit

class OverlayView: UIViewController {
    
    var hasSetPointOrigin = false
    var pointOrigin: CGPoint?
    
    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var cityLabel: UILabel!
    @IBOutlet weak var populationLabel: UILabel!
    @IBOutlet weak var monthlyRentLabel: UILabel!
    @IBOutlet weak var walkScoreLabel: UILabel!
    @IBOutlet weak var livabilityScoreLabel: UILabel!
    @IBOutlet weak var bikeScoreLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let panGesture = UIPanGestureRecognizer(target: self, action: #selector(panGestureRecognizerAction))
        view.addGestureRecognizer(panGesture)
        imageView.clipsToBounds = true
        imageView.layer.cornerRadius = 10
    }
    
    func updateView(city: String?) {
        guard let city = city else { return }
        cityLabel.text = city
        imageView.image = nil
        
        getPhotoReferenceForCity(cityName: city, completion: { (photoReference) in
            guard let photoReference = photoReference else { return }
            let imageOperation = FetchImageOperation(photoReference: photoReference)
            imageOperation.start()
            DispatchQueue.main.async {
                while(imageOperation.state != .isFinished) {}
                if let imageData = imageOperation.imageData {
                    self.imageView.image = UIImage(data: imageData)
                }
            }
        })
        
        fetchSingleCity(cityName: city, completion: { (city) in
            guard let city = city else { return }
            DispatchQueue.main.async {
                self.cityLabel.text = city.city_name
                self.populationLabel.text = "Population: \(city.population)"
                self.monthlyRentLabel.text = "Monthly Rent: \(city.rent_per_month)"
                self.walkScoreLabel.text = "Walk Score: \(city.walk_score)"
                self.livabilityScoreLabel.text = "Livability Score: \(city.livability_score)"
                self.bikeScoreLabel.text = "Bike Score: \(city.bike_score)"
            }
        })
        
    }
    
    override func viewDidLayoutSubviews() {
        if !hasSetPointOrigin {
            hasSetPointOrigin = true
            pointOrigin = self.view.frame.origin
        }
    }
    @objc func panGestureRecognizerAction(sender: UIPanGestureRecognizer) {
        let translation = sender.translation(in: view)
        
        // Not allowing the user to drag the view upward
        guard translation.y >= 0 else { return }
        
        // setting x as 0 because we don't want users to move the frame side ways!! Only want straight up or down
        view.frame.origin = CGPoint(x: 0, y: self.pointOrigin!.y + translation.y)
        
        if sender.state == .ended {
            let dragVelocity = sender.velocity(in: view)
            if dragVelocity.y >= 1300 {
                self.dismiss(animated: true)
            } else {
                // Set back to original position of the view controller
                UIView.animate(withDuration: 0.3) {
                    self.view.frame.origin = self.pointOrigin ?? CGPoint(x: 0, y: 400)
                }
            }
        }
    }
    
    @IBAction func addCityToFavoritesTapped(_ sender: UIButton) {
        
    }
}
