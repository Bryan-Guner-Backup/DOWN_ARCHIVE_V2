const units = require("./units-model");

module.exports = function unitsMiddleware(req, res, next) {
  const { subject } = req.decodedJwt;
  unitID = req.params.id;
  units
    .findUnitById(unitID)
    .then((unit) => {
      if (unit) {
        if (unit.manager_id === subject) {
          next();
        } else {
          res.status(400).json({
            message: `Please don't try to delete other people's stuff!`,
          });
        }
      } else {
        res.status(400).json({ message: `Could not find unit at id ${id}` });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ err: err.message, message: "Error in middleware" });
    });
};
