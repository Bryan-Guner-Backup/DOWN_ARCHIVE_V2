const express = require('express')
const Data = require('./products-model')

const router = express.Router()

router.get('/', (req, res) => {
  Data.find()
    .then((products) => {
      res.status(200).json(products)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving products' })
    })
})

router.get('/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((product) => {
      product
        ? res.status(200).json(product)
        : res.status(404).json({ message: 'Product not found' })
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Error retrieving the specified product' })
    })
})

router.post('/', (req, res) => {
  Data.add(req.body)
    .then((product) => {
      res.status(201).json(product)
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error adding the product' })
    })
})

router.get('/:id/projects', (req, res) => {
  const { id } = req.params

  Data.findProjects(id)
    .then((projects) => {
      if (projects.length) {
        res.json(projects)
      } else {
        res
          .status(404)
          .json({ message: 'Could not find projects for given product' })
      }
    })
    .catch(({ name, message, error, stack }) => {
      res.status(500).json({ name, message, error, stack })
    })
})

router.post('/:id/projects', (req, res) => {
  const projectData = req.body
  const { id } = req.params

  Data.findById(id)
    .then((product) => {
      if (product) {
        Data.addProject(projectData, id).then((project) => {
          res.status(201).json(project)
        })
      } else {
        res
          .status(404)
          .json({ message: 'Could not find product with given id.' })
      }
    })
    .catch(({ name, error, message, stack }) => {
      res.status(500).json({ name, error, message, stack })
    })
})

router.put('/:id', (req, res) => {
  Data.update(req.params.id, req.body)
    .then((product) => {
      product
        ? res.status(200).json(product)
        : res.status(404).json({
            message: 'The product with the specified id could not be found',
          })
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating the product' })
    })
})

router.delete('/:id', (req, res) => {
  Data.remove(req.params.id)
    .then((count) => {
      count > 0
        ? res.status(200).json({ message: 'This product has been removed' })
        : res.status(404).json({ message: 'This product could not be found' })
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Error removing the product',
      })
    })
})

module.exports = router
