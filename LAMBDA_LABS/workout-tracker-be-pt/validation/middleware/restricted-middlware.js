const { verifyToken } = require('../../utilities/jwt');

module.exports = (req, res, next) => {
  const user = req.body;
  const token = req.headers.authorization;

  const decoded = verifyToken(user, token);

  if (token && decoded) {
    req.userId = decoded.subject;
    next();
  } else {
    res.status(403).json({ message: 'You need to login' });
  }
};
