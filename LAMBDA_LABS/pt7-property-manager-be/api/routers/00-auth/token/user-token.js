const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateUserToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
    type: user.role
  };

  const secret = process.env.JWT_SECRET || "This is secret this is hidden";

  const options = { expiresIn: "1d" };

  return jwt.sign(payload, secret, options);
}

module.exports = generateUserToken;
