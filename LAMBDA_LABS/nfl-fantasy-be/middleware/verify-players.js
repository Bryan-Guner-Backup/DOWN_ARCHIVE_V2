const Players = require('../actions/player-actions');

module.exports = {
  validateFanId,
  validatePlayerId,
  validatePlayerPost,
}  

function validateFanId() {
  return (req, res, next) => {
    Players.findFan(req.params.id) 
      .then(fan => {
        if (fan) {
          req.fan = fan;
          next();
        } else {
          res.status(403).json({
            message: "Invalid fan id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error trying to retrieve the Fan. Please try again later."
        })
      })
  }
}

function validatePlayerId() {
  return (req, res, next) => {
    Players.findById(req.params.id) 
      .then(player => {
        if (player) {
          req.player = player;
          next();
        } else {
          res.status(403).json({
            message: "Invalid player id"
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error trying to retrieve the player. Please try again later."
        })
      })
  }
}

function validatePlayerPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username."
      })} else if (!req.body.password) {
      return res.status(400).json({
        message: "Please provide a password."
      })} else if (!req.body.email) {
      return res.status(400).json({
        message: "Please provide an email."
      })} else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name."
      })} else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name."
      })} else if (!req.body.city) {
      return res.status(400).json({
        message: "Please provide a city."
      })} else if (!req.body.state) {
      return res.status(400).json({
        message: "Please provide a state."
      })} else { next(); }
    }}