const router = require('express').Router();
const SampleIncidents = require('../../data/sample_incidents');

router.get('/', function (req, res) {
  res.status(200).json(SampleIncidents);
});

module.exports = router;
