const Program = require('./programModel');

const validateProgram = (req, res, next) => {
  const { name, type, description } = req.body;
  if (!req.body) {
    res.status(400).json({ message: 'Missing program data' });
  } else if (!name) {
    res.status(400).json({ message: 'Missing program name' });
  } else if (!type) {
    res.status(400).json({ message: 'Missing program type' });
  } else if (!description) {
    res.status(400).json({ message: 'Missing program description' });
  } else {
    next();
  }
};

module.exports = {
  validateProgram,
};
