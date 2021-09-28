const express = require('express');
const router = express.Router();

//import model
const entity = require('../models/entityModel');

//const user_id = req.userId;
//const id = req.params.id

router.get('/', (req, res) => { 
    entity.getPublic().then(response =>{
        res.status(200).json({message: response})
    })
    .catch(err =>{
        console.log(err);
    })
})

router.get('/entity/:id', (req, res) =>{
    const id = req.params.id;
    entity.getEntityById(id).then(response =>{
        res.status(200).json({message: response})
    })
    .catch(err =>{
        console.log(err);
    })
})

router.get(`/user/entity/:id`, (req, res) =>{
    const id = req.params.id;
    entity.getUserByEntityId(id).then(response =>{
        res.status(200).json({message: response})
    })
    .catch(err =>{
        console.log(err);
    })
})

module.exports = router;