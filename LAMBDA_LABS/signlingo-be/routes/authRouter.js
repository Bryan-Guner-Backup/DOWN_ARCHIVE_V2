const router = require("express").Router();
const OktaJwtVerifier = require("@okta/jwt-verifier");
const User = require("../models/authModel");
const ISSUER = process.env.ISSUER;

// register and login end point --> receives okta accessToken, parses it, checks if user is already in
// database, if not, adds user to user table and adds levels to user account in user levels table
// if token is bad, end point will not find okta uid. You will need to make sure to have an env var
// that represents your issuer process.env.ISSUER

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: ISSUER,
});

router.post("/signup", (req, res) => {
  oktaJwtVerifier
    .verifyAccessToken(req.body.accessToken.accessToken, "api://default")
    .then((decodedToken) => {
      User.findByOktaUID(decodedToken.claims.uid)
        .then((foundit) => {
          if (foundit.length === 0) {
            User.addUser(decodedToken.claims.uid).then((addedUser) => {
              res.status(201).json({
                newUser: addedUser,
                addedThem: "We added a user!",
                okta_uid: decodedToken.claims.uid,
              });
            });
          } else {
            res.status(200).json({
              foundUser: true,
              userFound: "Found the user already in users table",
              foundit,
              okta_uid: decodedToken.claims.uid,
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            error: err.message,
            error2: "could not find okta uid",
            uid: decodedToken.claims.uid,
          });
        });
    })
    .catch((err) => {
      // a validation failed, inspect the error
      res.status(500).json({
        message: `Json verify didn't work`,
        err: err.message,
      });
    });
});

module.exports = router;
