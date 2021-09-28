const express = require('express');
const DB = require('../utils/db-helper');
const router = express.Router();
const ServiceEntry = require('./serviceEntriesModel');

router.get('/', (req, res) => {
  ServiceEntry.getAll()
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  ServiceEntry.getById(id)
    .then((entry) => {
      if (entry) {
        res.status(200).json(entry);
      } else {
        res.status(404).json({ error: `Entry ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  const entryData = req.body;
  ServiceEntry.create(entryData)
    .then((entry) => {
      res.status(201).json(entry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  ServiceEntry.update(id, changes)
    .then((editedEntry) => {
      res.status(200).json(editedEntry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  ServiceEntry.remove(id)
    .then((count) => {
      if (count > 0) {
        res
          .status(200)
          .json({ message: `Service Entry ${id} has been removed` });
      } else {
        res
          .status(404)
          .json({ message: `Service Entry ${id} could not be found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
