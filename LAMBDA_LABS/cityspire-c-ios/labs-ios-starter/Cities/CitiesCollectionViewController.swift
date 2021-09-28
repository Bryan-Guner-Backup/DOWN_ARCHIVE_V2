//
//  CitiesViewController.swift
//  labs-ios-starter
//
//  Created by Conner on 2/8/21.
//  Copyright © 2021 Spencer Curtis. All rights reserved.
//

import UIKit

class CitiesCollectionViewController: UIViewController {
    // MARK: -- IBOutlets
    @IBOutlet var citiesCollectionView: UICollectionView!
    @IBOutlet weak var searchBar: UISearchBar!
    
    // MARK: -- Properties
    var cities: [String] = []
    var citySearchResults: [String] = []
    var selectedCity: City? = nil
    var imageForSelectedCell: UIImage? = nil
    
    // MARK: -- Properties (Caching)
    private let photoFetchQueue = OperationQueue()
    private var fetchOperations: [String:FetchImageOperation] = [:]
    private let cache = Cache<String, UIImage>()
    
    // MARK: -- ViewDidLoad
    override func viewDidLoad() {
        super.viewDidLoad()
        citiesCollectionView.dataSource = self
        citiesCollectionView.delegate = self
        searchBar.delegate = self
        
        fetchAllCities(completion: { (results) in
            self.cities = results
            self.citySearchResults = results
            DispatchQueue.main.async {
                self.citiesCollectionView.reloadData()
            }
        })
        
    }
}

extension CitiesCollectionViewController: UICollectionViewDelegate, UICollectionViewDataSource {
    // MARK: -- CellForItemAt
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "cityCell", for: indexPath) as! CityCollectionViewCell
        
        let city: String = citySearchResults[indexPath.row]

        cell.cityStateLabel.text = city
        cell.cityImageView.contentMode = .scaleToFill
        cell.cityImageView.layer.cornerRadius = 15
        
        // Check if city image is in the cache, if not, start fetch
        
        // Check if image in cache, if so, set image
        if let cachedImage = cache.value(for: city) {
            DispatchQueue.main.async {
                cell.cityImageView.image = cachedImage
            }
        } else {
            // Otherwise image not in cache, start operation to fetch image
            getPhotoReferenceForCity(cityName: city, completion: { (photoReference) in
                guard let photoReference = photoReference else { return }
                let imageFetchOperation = FetchImageOperation(photoReference: photoReference)
                
                let cachePhotoOperation = BlockOperation {
                    guard let imageData = imageFetchOperation.imageData,
                        let image = UIImage(data: imageData) else { return }
                    self.cache.cache(value: image, for: city)
                }
                
                cachePhotoOperation.addDependency(imageFetchOperation)
                
                let setImageIfCellNotReused = BlockOperation {
                    DispatchQueue.main.async {
                        guard let imageData = imageFetchOperation.imageData, let image = UIImage(data: imageData) else { return }
                        cell.cityImageView.image = image
                    }
                }
                
                setImageIfCellNotReused.addDependency(imageFetchOperation)
                
                self.photoFetchQueue.addOperations([
                    imageFetchOperation,
                    cachePhotoOperation,
                    setImageIfCellNotReused,
                ], waitUntilFinished: false)
                
                self.fetchOperations[city] = imageFetchOperation
            })
        }
        
        return cell
    }
    
    // MARK: -- NumberOfItemsInSection
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return citySearchResults.count
    }
    
    // MARK: -- DidSelectItemAt
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        fetchSingleCity(cityName: citySearchResults[indexPath.row], completion: { (city) in
            if let city = city {
                self.selectedCity = city
                DispatchQueue.main.async {
                    self.performSegue(withIdentifier: "CityDetailSegue", sender: nil)
                }
            }
        })
    }
    
}

extension CitiesCollectionViewController: UISearchBarDelegate {
    // MARK: -- TextDidChange
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        let filteredCities = cities.filter { (city) -> Bool in
            return city.lowercased().starts(with: searchText.lowercased())
        }
        self.citySearchResults = filteredCities
        self.citiesCollectionView.reloadData()
    }
}

extension CitiesCollectionViewController {
    // MARK: -- prepare for segue
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "CityDetailSegue" {
            if let selectedCity = selectedCity, let destinationVC = segue.destination as? CityDetailViewController {
                destinationVC.city = selectedCity
            }
        }
    }
}

extension CitiesCollectionViewController {
    // MARK: -- Caching
    func collectionView(_ collectionView: UICollectionView, didEndDisplaying cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {
        if fetchOperations.count < indexPath.row {
            if let fetchOperation = fetchOperations[citySearchResults[indexPath.row]] {
                fetchOperation.cancel()
            }
        }
    }
}
