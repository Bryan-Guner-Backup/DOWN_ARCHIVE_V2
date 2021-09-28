const express = require('express');
const fetch = require('node-fetch');

const db = require('../../models/models.js');

const router = express.Router();

/* ***********************************************************
  publicRouter
  -----------------------------------------------------------
  This file serves informational routes that
  are not protected and serves information that
  is available to the general public.
  -----------------------------------------------------------
  It is primarily for advertising of DJs and events.
  -----------------------------------------------------------
  The private versions of these routes are located
  under the authRouter endpoints.
  ******************************************************** */

// ----------------- DJs -----------------
// TODO: Filter out private information
// (Username, Password)

// Get all DJs
router.get('/djs', (req, res) => {
  db.getAllDJs()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get DJ by ID
router.get('/dj/:id', (req, res) => {
  const { id } = req.params;
  db.findDJById(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----------------- Events -----------------
// TODO: Filter out private information (notes)

router.get('/events', (req, res) => {
  db.getAllEvents()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/event/:id', (req, res) => {
  const { id } = req.params;
  db.findEventById(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Search Tracks

router.get('/track/:search', (req, res) => {
  const { search } = req.params;

  fetch(`https://sp-search.herokuapp.com/track_search_ready/${search}`)
    .then(resTrack => resTrack.json())
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// prediction routes

router.get('/predict/:spotifyId', (req, res) => {
  const { spotifyId } = req.params;

  fetch(`https://sp-search.herokuapp.com/predict/${spotifyId}`)
    .then(predictions => predictions.json())
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
