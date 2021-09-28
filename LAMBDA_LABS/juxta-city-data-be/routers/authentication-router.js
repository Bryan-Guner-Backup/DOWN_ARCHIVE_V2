const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");
const Users = require("./../models/users-model.js");

router.post("/signup", async (req, res, next) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  try {
    const addedUser = await Users.add(user);

    if (!addedUser) {
      next({
        status: 400,
        message: `Error: Unable to sign up.`,
      });
    } else {
      const token = genToken(addedUser);
      res.status(200).json({
        message: `Welcome ${user.username}`,
        ...addedUser,
        token,
      });
    }
  } catch (err) {
    next({
      message: err,
    });
  }
});

router.post("/signin", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const [user] = await Users.getBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      res.status(200).json({
        message: `Welcome ${user.username}`,
        token: token,
      });
    } else {
      next({
        status: 400,
        message: "Invalid signin credentials",
      });
    }
  } catch (err) {
    console.log(err);
    next({
      message: err,
    });
  }
});

function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username,
  };

  const options = { expiresIn: "8h" };
  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;
