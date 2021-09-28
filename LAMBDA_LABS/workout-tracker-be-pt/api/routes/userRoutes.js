const express = require('express');
const router = express.Router();

//import model
const Users = require('../models/userModel');

//GET ALL USERS
router.get('/org', (req, res) => {
    Users.getUsers()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to retrieve users"
            });
        });
});

//GET USER BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    Users.findById(id)
        .then(user => {
            if(user){
                res.status(200).json(user);
            } else {
                res.status(404).json({message: 'Could not find user with given id.'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'Failed to get user'});
        });
});

//UPDATE USER
router.put('/', (req, res) => {
    const updatedUser = req.body;
    const user_id = req.userId;
    Users.updateUser(user_id, updatedUser)
        .then(user => {
            if(user) {
                res.status(200).json({ message: "Successfully updated User info", updatedUser });
            } else {
                res.status(404).json({ message: 'Could not find user with given id'});
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
});

//DELETE USER
router.delete('/', (req, res) => {
    const id = req.userId
        Users.deleteUser(id)
        .then(user => {
            res.status(200).json({message: 'User deleted'})
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;