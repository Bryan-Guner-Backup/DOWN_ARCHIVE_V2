const router = require('express').Router();

const publicRouter = require('./publicRouter/publicRouter.js');
const trackRouter = require('./publicRouter/trackRouter.js');

router.use('/', publicRouter);
router.use('/', trackRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Public router is functioning.' });
});

module.exports = router;
