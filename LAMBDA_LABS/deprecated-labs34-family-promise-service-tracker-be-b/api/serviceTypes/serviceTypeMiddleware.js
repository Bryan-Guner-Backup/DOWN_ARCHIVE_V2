const Service = require('./serviceTypeModel');

const validateService = (req, res, next) => {
  const { name, program_id } = req.body;
  if (!req.body) {
    res.status(400).json({ message: 'Missing service data' });
  } else if (!name) {
    res.status(400).json({ message: 'Missing service name' });
  } else if (!program_id) {
    res.status(400).json({ message: 'Missing program id' });
  } else {
    next();
  }
};

const canEditService = (req, res, next) => {
  const role = req.profile.role;
  if (role == 'administrator' || role == 'program_manager') {
    next();
  } else {
    res.status(400).json({ message: 'You do not have credentials for this' });
  }
};

module.exports = {
  validateService,
  canEditService,
};
