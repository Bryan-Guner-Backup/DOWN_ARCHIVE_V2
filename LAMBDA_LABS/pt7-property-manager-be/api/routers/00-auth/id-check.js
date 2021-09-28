module.exports = function idCheck(req, res, next) {
  const { subject } = req.decodedJwt;
  const { type } = req.decodedJwt;
  if (subject == req.params.id || type.toLowerCase() === "manager") {
    next();
  } else {
    res.status(500).json({
      errorMessage:
        "You cannot update another User's information, mind your own business!",
    });
  }
};
