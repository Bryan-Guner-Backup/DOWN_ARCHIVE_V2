//
//  MyActivitiesDetailViewController.swift
//  Workout Tracker
//
//  Created by Stephanie Bowles on 3/2/20.
//  Copyright © 2020 LambdaLabsPT7. All rights reserved.
//

import UIKit

protocol ActivityScheduledCellDelegate: class {
    func markAsCompleted()
}

class MyActivitiesDetailViewController: UIViewController {
    weak var delegate: ActivityScheduledCellDelegate?
    
    @IBOutlet weak var dateLabel: UILabel!
    
    @IBOutlet weak var timeLabel: UILabel!
    @IBOutlet weak var durationLabel: UILabel!
    
    @IBOutlet weak var workoutCollectionView: UICollectionView!
    
    @IBOutlet weak var whereLocationLabel: UILabel!
    
    //    var schedule: Schedule? {
    //        didSet {
    //            DispatchQueue.main.async {
    //                self.updateViews()
    //            }
    //        }
    //    }
    //
    
    var scheduleFromStorage: ScheduledWorkout? {
        didSet {
            DispatchQueue.main.async {
                self.updateViews()
            }
        }
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.navigationController?.navigationBar.tintColor = #colorLiteral(red: 0.4631554372, green: 0.3478105556, blue: 0.1369482507, alpha: 1)
        workoutCollectionView.delegate = self
        workoutCollectionView.dataSource = self
    }
    
    
    @IBAction func markAsCompletedTapped(_ sender: Any) {
        guard var scheduleFromStorage = scheduleFromStorage else {return}
        scheduleFromStorage.hasBeenCompleted  = true
        
        let updatedSchedule = scheduleFromStorage
        do {
            try WorkoutStorage.shared.remove(workoutName: scheduleFromStorage.workoutName, for: scheduleFromStorage.startTime!)
        } catch {
            NSLog("remove error")
        }
        do {
            try WorkoutStorage.shared.save(workout: updatedSchedule, for: updatedSchedule.startTime!)
              } catch {
                  NSLog("There was an error saving the workout to Workout Storage")
              }
        
//        do {
//            try WorkoutStorage.shared.update(workout: scheduleFromStorage, for: scheduleFromStorage.startTime!)
//        } catch {
//            NSLog("There was an error updating the workout to Workout Storage")
//        }
        delegate?.markAsCompleted()
        self.navigationController?.popViewController(animated: true)
        
        
    }
    
    func updateViews(){
        guard let scheduleFromStorage = scheduleFromStorage,
            isViewLoaded else { return }
        
        title = scheduleFromStorage.workoutName
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd/yyyy"
        dateLabel.text = dateFormatter.string(from: scheduleFromStorage.startTime!)
        
        let startTimeFormatter = DateFormatter()
        startTimeFormatter.dateFormat = "HH:mm"
        startTimeFormatter.timeZone = Calendar.current.timeZone
        timeLabel.text = startTimeFormatter.string(from: scheduleFromStorage.startTime!)
        durationLabel.text = scheduleFromStorage.duration
        
        
        //        guard let schedule = schedule,
        //            isViewLoaded else { return }
        //
        //        title = schedule.workoutName
        //        let dateFormatter = DateFormatter()
        //        dateFormatter.dateFormat = "MM/dd/yyyy"
        //        dateLabel.text = dateFormatter.string(from: schedule.startTime)
        //
        //        let startTimeFormatter = DateFormatter()
        //        startTimeFormatter.dateFormat = "HH:mm"
        //        timeLabel.text = startTimeFormatter.string(from: schedule.startTime)
        //
    }
    
}

extension MyActivitiesDetailViewController: UICollectionViewDelegate, UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return scheduleFromStorage!.workouts.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let collectionCell = collectionView.dequeueReusableCell(withReuseIdentifier: "workoutRoutineCell", for: indexPath) as? WorkoutCollectionViewCell else { return UICollectionViewCell() }
        
        let workoutNames = scheduleFromStorage!.workouts[indexPath.row]
        collectionCell.workoutNameLbl.text = workoutNames.exerciseName
        
        collectionCell.layer.backgroundColor = UIColor.systemGray5.cgColor
        
        return collectionCell
    }
    
    
}
