const router = require('express').Router();

const TrackTbl = require('../../models/trackModel.js');

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  TrackTbl.removeTrack(id)
    .then(deletedTrack => {
      res.status(200).json(`you have deleted ${deletedTrack} track`);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// move the track to playlist and delete from track table

router.post('/move/:id', (req, res) => {
  const { id } = req.params;

  TrackTbl.moveTrack(id)
    .then(movedTrack => {
      res.json(movedTrack);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// delete playlist items

router.delete('/playlist/:id', (req, res) => {
  const { id } = req.params;

  TrackTbl.removePlaylist(id)
    .then(deletedTrack => {
      res.status(200).json(`you have deleted ${deletedTrack} track`);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
