/* *********************************************************
This file is for Jest testing to circumvent authentication.
********************************************************* */
module.exports = jest.fn().mockImplementation((req, res, next) => {
  next();
});
