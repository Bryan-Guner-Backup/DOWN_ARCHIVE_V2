const router = require('express').Router();
const db = require('../../models/models.js');

// ----------- POST Event --------------
router.post('/', (req, res) => {
  const event = req.body;

  if (!event.name || !event.date) {
    res.status(400).json({ message: 'Missing required fields' });
  }

  // Check for duplicates here if we need to.

  db.addEvent(event)
    .then(saved => {
      res.status(200).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ------------- GET Single Event -------------
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.findEventById(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// -------------- PUT (modify) Event ----------
// TODO: Check failure modes. Ensure ID exists first.
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  db.updateEvent(id, body)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ------------- DELETE Event ---------------
// TODO: Check failure modes.
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.removeEvent(id)
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
