const Recipient = require('./recipientsModel');

const validateRecipient = (req, res, next) => {
  const { firstname, lastname, ethnicity_id } = req.body;
  if (!firstname) {
    res.status(400).json({ message: 'Missing first name of recipient' });
  } else if (!lastname) {
    res.status(400).json({ message: 'Missing last name of recipient' });
  } else if (!ethnicity_id) {
    res.status(400).json({ message: 'Missing ethnicity of recipient' });
  } else {
    next();
  }
};

module.exports = {
  validateRecipient,
};
