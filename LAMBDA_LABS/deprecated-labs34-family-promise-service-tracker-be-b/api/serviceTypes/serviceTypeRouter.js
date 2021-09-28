const express = require('express');
const ServiceTypes = require('./serviceTypeModel');
const router = express.Router();
const { canCrudServiceType } = require('../middleware/authorization');
const { validateService } = require('./serviceTypeMiddleware');

router.get('/', (req, res) => {
  ServiceTypes.findAll()
    .then((statuses) => {
      res.status(200).json(statuses);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  ServiceTypes.findById(id)
    .then((service) => {
      if (service) {
        res.status(200).json(service);
      } else {
        res.status(404).json({ error: `Service Type ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post(
  '/',
  canCrudServiceType,
  validateService,
  async (req, res, next) => {
    try {
      newServiceType = await ServiceTypes.create(req.body);
      res.status(200).json(newServiceType);
    } catch (err) {
      next(err);
    }
  }
);

router.put('/:id', canCrudServiceType, validateService, (req, res) => {
  const update = req.body;

  if (Object.keys(update).length > 0) {
    const id = req.params.id;
    ServiceTypes.findById(id)
      .then(
        ServiceTypes.update(id, update)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'Service type updated', service_type: updated });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update service type '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find service type '${id}'`,
          error: err.message,
        });
      });
  } else {
    res.status(400).json({ message: 'Update request not valid' });
  }
});

router.delete('/:id', canCrudServiceType, (req, res) => {
  const { id } = req.params;

  ServiceTypes.remove(id)
    .then((count) => {
      if (count > 0) {
        res
          .status(200)
          .json({ message: `Service Type ${id} has been removed` });
      } else {
        res
          .status(404)
          .json({ message: `Service Type ${id} could not be found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
