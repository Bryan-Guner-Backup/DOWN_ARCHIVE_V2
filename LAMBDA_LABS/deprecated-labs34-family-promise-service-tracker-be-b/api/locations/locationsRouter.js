const express = require('express');
const router = express.Router();
const Locations = require('./locationsModel');

// return all recipients
router.get('/', (req, res) => {
  Locations.getAll()
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// return recipient by id
// perhaps make it variably be able to take multiple id's later?
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Locations.getById(id)
    .then((location) => {
      res.status(200).json(location);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', async (req, res, next) => {
  try{
    console.log(req.body)
    const newLocation = await Locations.create(req.body)
    console.log(newLocation)
    res.status(200).json(newLocation)
  } catch(err){
    next(err)
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Locations.update(id, changes)
    .then((editedEntry) => {
      res.status(200).json(editedEntry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try{
    const idRemoved = await Locations.remove(id)
    res.status(200).json(`Location with ID of ${idRemoved} removed successfully`)
  } catch(err){
    next(err)
  }
});

module.exports = router;
