// this was old validation middleware used by labs 23, feel free to refactor and use

/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const { body, validationResult } = require('express-validator');

//Sets the Validation rules
const userValidationRules = () => {
  return [
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 8 }),
  ]
}

//Checks that the data is valid.
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}

//Contributor: David Isakson