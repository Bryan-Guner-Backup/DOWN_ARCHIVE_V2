//
//  CityDetailViewController.swift
//  labs-ios-starter
//
//  Created by Conner on 2/16/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import UIKit

class CityDetailViewController: UIViewController {
    // MARK: -- IBOutlets
    @IBOutlet weak var populationLabel: UILabel!
    @IBOutlet weak var rentLabel: UILabel!
    @IBOutlet weak var walkScoreLabel: UILabel!
    @IBOutlet weak var cityImageView: UIImageView!
    @IBOutlet weak var livabilityScoreLabel: UILabel!
    @IBOutlet weak var bikeScoreLabel: UILabel!
    
    
    // MARK: -- Properties
    var city: City? = nil
    var image: UIImage? = nil
    
    // MARK: -- ViewDidLoad
    override func viewDidLoad() {
        super.viewDidLoad()
        guard let city = city else { return }
        cityImageView.layer.cornerRadius = 10
        cityImageView.clipsToBounds = true
        cityImageView.image = nil
        
        navigationItem.title = city.city_name
        populationLabel.text = "Population: \(city.population)"
        rentLabel.text = "Monthly Rent: $\(city.rent_per_month)"
        walkScoreLabel.text = "Walk Score: \(city.walk_score)"
        livabilityScoreLabel.text = "Livability Score: \(city.livability_score)"
        bikeScoreLabel.text = "Bike Score: \(city.bike_score)"
        
        getPhotoReferenceForCity(cityName: city.city_name, completion: { (photoReference) in
            guard let photoReference = photoReference else { return }
            let imageOperation = FetchImageOperation(photoReference: photoReference)
            imageOperation.start()
            DispatchQueue.main.async {
                while(imageOperation.state != .isFinished) {}
                if let imageData = imageOperation.imageData {
                    self.cityImageView.image = UIImage(data: imageData)
                }
            }
        })
    }
}
