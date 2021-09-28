const AuthModel = require("../models/authModel");

// Restricts endpoints to users with okta_uid
module.exports = (req, res, next) => {
  let uid;
  if (req.body.oktaUID) {
    uid = req.body.oktaUID;
  } else if (req.params.oktaUID) {
    uid = req.params.oktaUID;
  }

  if (uid) {
    AuthModel.findByOktaUID(uid)
      .then(valid => {
        if (valid.length !== 0) {
          next();
        } else {
          res.status(400).json({ message: "Please login and try again, bad okta_uid" })
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Error searching for oktaUID in database" })
      });
    }
};
