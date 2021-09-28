const express = require('express');
const router = express.Router();
const followDB = require('../models/followModel.js');
const restricted = require('../../validation/middleware/restricted-middlware');

router.get('/followers/:id', (req, res) => {
    const user_id = req.params.id

    followDB.getFollowers(user_id)
        .then(followers =>{
                res.status(200).json({message: followers})
        })
        .catch(err =>{
            res.status(500).json({message: 'There was a problem getting followers'})
        })
});

router.get('/followers/number/:id', (req, res) => {
    const user_id = req.params.id

    followDB.getNumberOfFollowers(user_id)
        .then(followers =>{
            res.status(200).json({message: followers})
        })
        .catch(err =>{
            res.status(500).json({message: 'There was a problem getting followers'})
        })
});

router.get('/following/:id', (req, res) => {3
    const user_id = req.params.id

    followDB.getFollowing(user_id)
        .then(following =>{
            res.status(200).json({message: following})
        })
        .catch(err =>{
            res.status(500).json({message: 'There was a problem getting follows'})
        })
});

router.get('/following/number/:id', (req, res) => {3
    const user_id = req.params.id

    followDB.getNumberOfFollowing(user_id)
        .then(following =>{
            res.status(200).json({message: following})
        })
        .catch(err =>{
            res.status(500).json({message: 'There was a problem getting follows'})
        })
});

router.post('/:id', restricted, (req, res) =>{
    const follower_id = req.params.id
    const user_id = req.userId;

    followDB.add(follower_id, user_id)
        .then(follows =>{
            res.status(200).json({message: follows})
        })
        .catch(err =>{
            res.status(500).json({message: 'There was a problem with adding this follower'})
        })
})

router.delete('/:id', restricted, (req, res) =>{
    const follower_id = req.params.id
    const user_id = req.userId;

    followDB.remove(follower_id, user_id)
        .then(follows =>{
            res.status(200).json({message: follows})
        })
        .catch(err =>{
            res.status(500).json({message: 'There was a problem with removing this follower'})
        })
})

module.exports = router;