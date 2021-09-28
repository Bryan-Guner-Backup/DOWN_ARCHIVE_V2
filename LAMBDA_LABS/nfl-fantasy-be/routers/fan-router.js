// Router
const fanRouter = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

// Model
const Fans = require('../actions/fan-actions');

// Middleware
const { validateFanId } = require('../middleware/verify-fans');

// Token Generator
function generateToken(fan) {
  return jwt.sign({
    fanId: fan.fan_id,
  }, secrets.jwtSecret, {
    expiresIn: '1h',
  })
}

// == ENDPOINTS == //

// GET - /api/fans
// Find all fans in the DB
fanRouter.get('/', (req, res) => {
  Fans.find()
    .then(fans => {
    res.json(fans) 
  })
  .catch(err => {
    res.status(500).json({
      message: "There was an error trying to retrieve all the Fans in the Database. Please try again later."
    })
  })
})

// GET - /api/fans/:id
// Find a fan by id
fanRouter.get('/:id', validateFanId(), (req, res) => {
  Fans.findById(req.params.id)
    .then(fan => {
      res.json(fan)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retrieve the Fan. Please try again later."
      })
    })
})

// POST - /api/fans/register
// Register a new fan
fanRouter.post('/register', (req, res) => {
  let newFan = req.body;
  let hash = bcrypt.hashSync(newFan.password, 10);
  newFan.password = hash;

  Fans.add(newFan)
    .then(saved => {
      res.status(201).json({
        message: `Welcome ${saved.first_name}!`
      })
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while trying to register the new Fan. Please try again later."
      })
    })
})

// POST - /api/fans/login
// login to a fan's account
fanRouter.post('/login', (req, res) => {
  let { username, password } = req.body;

  Fans.findByFilter({ username }) 
    .then(fan => {
      if (fan && bcrypt.compareSync(password, fan.password)) {
        const token = generateToken(fan);

        res.status(200).json({
          message: `Welcome ${fan.first_name}!`,
          username: `${fan.username}`,
          authToken: token,
        })
      } else {
        res.status(400).json({
          message: "You are not authorized. Please try to login again."
        })
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error during login. Please try again later."
      })
    })
})

// PUT - /api/fans/:id
// Update a fan's account
fanRouter.put('/:id', validateFanId(), (req, res) => {
  const changes = req.body;

  Fans.update(req.params.id, changes)
    .then(fan => {
      res.status(200).json(fan)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to update the Fan. Please try again later."
      })
    })
})

// DELETE - /api/fans/:id
// Removes a Fan's account
fanRouter.delete('/:id', validateFanId(), (req, res) => {
  Fans.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Fan was removed successfully."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to remove the Fan. Please try again later."
      })
    })
})

module.exports = fanRouter;



// == POSSIBLE FUTURE RELEASE ENDPOINTS == //

// // POST - /api/fans/:id/players
// // Adds player to fan account
// fanRouter.post('/:id/players', validatePlayerPost(), (req, res) => {
//   Fans.addPlayer(req.body)
//     .then(player => {
//       res.status(200).json(player)
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: "There was an error trying to add the player to the fan's account. Please try again later."
//       })
//     })
// })

// // == May need to update == //
// // DELETE - /api/fans/:id/players/:id
// // Removes player from fan account
// fanRouter.delete('/:id/players/:id',validateFanId(), validatePlayerId(), (req, res) => {
//   Fans.removePlayer(req.params.id)
//     .then(() => {
//       res.status(200).json({
//         message: "The player was removed from the fan's account."
//       })
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: "There was an error trying to remove the player from the fan's account. Please try again later."
//       })
//     })
// })