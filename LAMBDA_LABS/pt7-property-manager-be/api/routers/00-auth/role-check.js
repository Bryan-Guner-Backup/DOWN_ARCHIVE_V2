module.exports = function roleCheck(req, res, next) {
  const { type } = req.decodedJwt;
  if (type.toLowerCase() == "manager") {
    next();
  } else {
    res.status(500).json({
      errorMessage: "You must be a Manager to do that!"
    });
  }
};
