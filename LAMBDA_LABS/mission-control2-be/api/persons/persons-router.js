const express = require('express')
const Data = require('./persons-model')

const router = express.Router()

router.get('/', (req, res) => {
  Data.find()
    .then((persons) => {
      res.status(200).json(persons)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving persons' })
    })
})

router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((person) => {
      person
        ? res.status(200).json(person)
        : res.status(404).json({ message: 'Person not found' })
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving the specified person' })
    })
})

router.get('/email/:email', (req, res) => {
  const { email } = req.params
  Data.findByEmail(email)
    .then((person) => {
      person
        ? res.status(200).json(person)
        : res
            .status(404)
            .json({ message: 'Person with specified email not found' })
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Error retrieving the person with specified email' })
    })
})

router.get('/:id/project', (req, res) => {
  Data.getPersonFromProject(req.params.id)
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((error) => {
      res.status(500).json({ message: error })
    })
})

router.post('/:id/:project', (req, res) => {
  const { id, project } = req.params
  Data.addPersonToProject(id, project)
    .then((response) => {
      console.log(response)
      res.status(200).json(response)
    })
    .catch((error) => {
      res.status(500).json({ message: error })
    })
})

router.post('/', (req, res) => {
  Data.add(req.body)
    .then((persons) => {
      res.status(201).json(persons)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error adding the person' })
    })
})

router.put('/:id', (req, res) => {
  Data.update(req.params.id, req.body)
    .then((person) => {
      person
        ? res.status(200).json(person)
        : res.status(404).json({
            message: 'The person with the specified id could not be found',
          })
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating person' })
    })
})

router.delete('/:id', (req, res) => {
  Data.remove(req.params.id)
    .then((count) => {
      count > 0
        ? res.status(200).json({ message: 'This person has been removed' })
        : res.status(404).json({ message: 'This person could not be found' })
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Error removing the person',
      })
    })
})

module.exports = router
