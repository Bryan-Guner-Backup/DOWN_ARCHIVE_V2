const router = require('express').Router();
const TrackTbl = require('../../models/trackModel');

// post track

router.post('/track', (req, res) => {
  const newTrack = req.body;

  TrackTbl.addTrack(newTrack)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => res.status(500).json(err));
});

// get event tracks

router.get('/event/:id/tracks', (req, res) => {
  const { id } = req.params;

  TrackTbl.getEventTracks(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).json(err));
});

// playlist

router.get('/event/:id/playlist', (req, res) => {
  const { id } = req.params;

  TrackTbl.getEventPlaylist(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
