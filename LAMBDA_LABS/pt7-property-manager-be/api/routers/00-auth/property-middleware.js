const Properties = require("../02-properties/properties-model");

module.exports = function propertyMiddleware(req, res, next) {
  const { subject } = req.decodedJwt;
  id = req.params.id;
  Properties.findById(id)
    .then((property) => {
      if (property) {
        if (property.manager_id === subject) {
          next();
        } else {
          res.status(400).json({
            message: `Please don't try to delete other people's stuff!`,
          });
        }
      } else {
        res
          .status(400)
          .json({ message: `Could not find property at id ${id}` });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ err: err.message, message: "Error in middleware" });
    });
};
