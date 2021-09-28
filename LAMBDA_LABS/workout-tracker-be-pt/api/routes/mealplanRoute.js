const express = require('express')
const router = express.Router()

const Mealplans = require('../models/mealplanModel')
const mealplanMiddleware = require('../../validation/middleware/mealplan-middleware')

router.get('/', (req, res) => {
    const id = req.userId

    Mealplans.getMealplans(id)
        .then(meals => {
            res.status(200).json(meals)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not retrieve meal plans', err })
        })
})

router.get('/:id', (req, res) => {
    const user_id = req.userId
    const id = req.params.id

    Mealplans.getMealplan(id, user_id)
        .then(meal => {
            res.status(200).json(meal)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not retrieve this meal plan', err })
        })
})

router.post('/', mealplanMiddleware, (req, res) => {
    const mealplan = req.body
    mealplan.user_id = req.userId

    Mealplans.addMealplan(mealplan)
        .then(meal =>  {
            res.status(201).json(meal)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not add this mealplan', err })
        })
})

router.post('/:id', (req, res) => {
    const id = req.params.id
    const user_id = req.userId
    const dietmealbridge = req.body

    dietmealbridge.mealplan_id = id

    Mealplans.addFoodToMealplan(dietmealbridge, user_id)
        .then(mealplan => {
            res.status(201).json(mealplan)
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not add this mealplan', err })
        })
})

router.put('/:id', (req, res) =>{
    const mealplan = req.body;
    const id = req.params.id
    mealplan.user_id = req.userId;

    Mealplan.updateMealplan(id, mealplan)
        .then(meal =>{
            res.status(200).json(meal)
        })
        .catch(err =>{
            res.status(500).json({ message: 'Could not update this mealplan', err })
        })
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    const user_id = req.userId;

    Mealplan.removeMealplan(id, user_id)
        .then(mealplan =>{
            res.status(200).json(mealplan)
        })
        .catch(err =>{
            res.status(500).json({ message: 'Could not remove this mealplan',  err })
        })
})

router.delete('/mealplan/:id', (req, res) =>{
    const {diet_id} = req.body;
    const user_id = req.userId;
    const id = req.params.id

    Mealplan.removeFoodInMealplan(id, user_id, diet_id)
        .then(food =>{
            res.status(200).json(food)
        })
        .catch(err =>{
            res.status(500).json({ message: 'Could not remove this food from the mealplan', err })
        })
})

module.exports = router;
