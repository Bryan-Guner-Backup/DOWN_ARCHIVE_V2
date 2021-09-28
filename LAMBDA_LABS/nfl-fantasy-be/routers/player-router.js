// Router
const playerRouter = require('express').Router();

// Model
const Players = require('../actions/player-actions');

// Middleware
const { validatePlayerId } = require('../middleware/verify-players');



// == ENDPOINTS == //

// TEST GET - /api/players/test
playerRouter.get('/test', (req, res) => {
  res.send("This is a test.");
})

// GET - /api/players
playerRouter.get('/', (req, res) => {
  Players.find()
    .then(allPlayers => {
      res.status(200).json(allPlayers)
    })
    .catch(err => {
      res.status(500).json({ 
        message: "There was an error retrieving all the players. Please try again later."
      })
    })
})

// GET - /api/players/:id
playerRouter.get('/:id', validatePlayerId(), (req, res) => {
  Players.findById(req.params.id)
    .then(player => {
      res.status(200).json(player)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retrieve the player. Please try again later."
      })
    })
})

// --- FUTURE RELEASE --- //
// // PUT - /api/players/:id
// // To move player to a new team
// playerRouter.put('/:id', validatePlayerId(), (req, res) => {
//   const changes = req.body;

//   Players.update(req.params.id, changes)
//     .then(player => {
//       res.status(200).json(player)
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: "There was an error trying to update the player. Please try again later."
//       })
//     })
// })

// // GET - /api/players/fan/:id
// // Gets all players saved by fan
// playerRouter.get('/fan/:id', validateFanId(), (req, res) => {
//   Players.findFan(req.params.id)
//     .then(fanPlayers => {
//       res.json(fanPlayers);
//     })
//     .catch(err => {
//       res.json(err)
//     })
// })

module.exports = playerRouter;