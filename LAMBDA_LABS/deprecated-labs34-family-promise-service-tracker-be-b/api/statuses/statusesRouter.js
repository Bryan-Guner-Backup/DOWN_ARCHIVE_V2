const express = require('express');
const DB = require('../utils/db-helper');
const Statuses = require('./statusesModel')
const router = express.Router();
const { requireAdmin } = require('../middleware/authorization');

router.get('/', (req, res) => {
  DB.findAll('statuses')
    .then((statuses) => {
      res.status(200).json(statuses);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Statuses.getById(id)
    .then((status) => {
      if (status) {
        res.status(200).json(status[0]);
      } else {
        res.status(404).json({ error: `Status ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', requireAdmin, (req, res) => {
  DB.create('statuses', req.body)
    .then((newStatus) => {
      res.status(201).json({ message: 'Status created', status: newStatus });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id', requireAdmin, (req, res) => {
  Statuses.update(req.params.id, req.body)
    .then((editedStatus) => {
      res.status(200).json({
        message: `Status ${req.params.id} updated`,
        status: editedStatus[0],
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', requireAdmin, (req, res) => {
  const { id } = req.params;

  Statuses.remove(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: `Status ${id} has been removed` });
      } else {
        res.status(404).json({ message: `Status ${id} could not be found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
