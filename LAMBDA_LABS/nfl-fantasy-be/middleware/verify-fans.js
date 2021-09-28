const Fans = require('../actions/fan-actions');

module.exports = { 
  validateFanId, 
  // validatePlayerId,
  // validatePlayerPost 
};

function validateFanId() {
  return (req, res, next) => {
    Fans.findById(req.params.id)
      .then(fan => {
        if (fan) {
          req.fan = fan;
          next();
        } else {
          res.status(403).json({
            message: "Invalid Fan Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to retrieve the Fan. Please try again later."
        })
      })
  }
}


// == POSSIBLE FUTURE RELEASE MIDDLEWARE == //

// function validatePlayerId() {
//   return (req, res, next) => {
//     Fans.findPlayerById(req.params.id) 
//       .then(player => {
//         if (player) {
//           req.player = player;
//           next();
//         } else {
//           res.status(403).json({
//             message: "Invalid player id"
//           })
//         }
//       })
//       .catch(err => {
//         res.status(500).json({
//           message: "There was an error trying to retrieve the player. Please try again later."
//         })
//       })
//   }
// }

// // Verify with team which data to save to Fan's account
// function validatePlayerPost() {
//   return (req, res, next) => {
//     if (!req.body.playerFull) {
//       return res.status(400).json({
//         message: "Please provide a username."
//       })
//     } else if (!req.body.position) {
//       return res.status(400).json({
//         message: "Please provide a password."
//       })
//     } else if (!req.body.currentTeam) {
//       return res.status(400).json({
//         message: "Please provide an email."
//       })
//     } else {
//       next();
//     }
//   }
// }