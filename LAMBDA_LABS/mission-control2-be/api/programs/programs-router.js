const express = require('express')
const Data = require('./programs-model')

const router = express.Router()

router.get('/', (req, res) => {
  Data.find()
    .then((programs) => {
      res.status(200).json(programs)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving programs' })
    })
})

router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((program) => {
      program
        ? res.status(200).json(program)
        : res.status(404).json({ message: 'Program not found' })
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Error retrieving the specified program' })
    })
})

router.get('/:id/products', (req, res) => {
  const { id } = req.params

  Data.findProducts(id)
    .then((products) => {
      if (products.length) {
        res.json(products)
      } else {
        res
          .status(404)
          .json({ message: 'Could not find products for given program' })
      }
    })
    .catch(({ name, message, error, stack }) => {
      res.status(500).json({ name, message, error, stack })
    })
})

router.post('/', (req, res) => {
  Data.add(req.body)
    .then((program) => {
      res.status(201).json(program)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error adding the program' })
    })
})

router.put('/:id', (req, res) => {
  Data.update(req.params.id, req.body)
    .then((program) => {
      program
        ? res.status(200).json(program)
        : res.status(404).json({
            message: 'The program with the specified id could not be found',
          })
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating program' })
    })
})

router.delete('/:id', (req, res) => {
  Data.remove(req.params.id)
    .then((count) => {
      count > 0
        ? res.status(200).json({ message: 'This program has been removed' })
        : res.status(404).json({ message: 'This program could not be found' })
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Error removing the program',
      })
    })
})
module.exports = router
