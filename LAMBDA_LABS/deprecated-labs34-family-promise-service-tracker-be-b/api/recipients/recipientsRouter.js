const express = require('express');
const { validateRecipient } = require('./recipientsMiddleware');
const router = express.Router();
const Recipients = require('./recipientsModel');

// return all recipients
router.get('/', (req, res) => {
  Recipients.getAll()
    .then((recipients) => {
      res.status(200).json(recipients);
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
  Recipients.getById(id)
    .then((recipient) => {
      res.status(200).json(recipient);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', validateRecipient, async (req, res, next) => {
  try {
    console.log(req.body);
    const newRecipient = await Recipients.create(req.body);
    console.log(newRecipient);
    res.status(200).json(newRecipient);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', validateRecipient, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Recipients.update(id, changes)
    .then((editedEntry) => {
      res.status(200).json(editedEntry);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const idRemoved = await Recipients.remove(id);
    res
      .status(200)
      .json(`Recipient with ID of ${idRemoved} removed successfully`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
