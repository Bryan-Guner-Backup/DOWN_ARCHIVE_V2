// Router setup and model import
const express = require("express");
const Properties = require("./properties-model");
const User = require("../01-users/users-model");
const Units = require("../04-units/units-model");
const router = express.Router();
// Authenticate
const authenticate = require("../00-auth/restricted-middleware");
const roleCheck = require("../00-auth/role-check");
const propertyMiddleware = require("../00-auth/property-middleware");

router.get("/", (req, res) => {
  // Auth
  // Get all properties
  Properties.find()
    .then((properties) => {
      res.status(200).json({ properties });
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to get all properties", err: err.message })
    );
});

router.post("/", authenticate, roleCheck, (req, res) => {
  // Auth
  // Adds a property
  const property = req.body;
  Properties.add(property)
    .then((id) => {
      Properties.findById(id.id)
        .then((prop) => {
          res.status(200).json({ prop });
        })
        .catch((err) => {
          res.status(500).json({ err: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/:id", (req, res) => {
  // Auth
  // Get property by ID
  const { id } = req.params;
  Properties.findById(id)
    .then((property) => {
      if (property) {
        res.status(200).json({ property });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Failed to get property", err: err.message });
    });
});

router.put("/:id", authenticate, roleCheck, propertyMiddleware, (req, res) => {
  // Auth
  //  Edits property by ID
  const id = req.params.id;
  const property = req.body;
  Properties.update(property, id)
    .then((updated) => {
      if (updated) {
        res.status(200).json({ updated });
      } else {
        res.status(400).json({ message: "Please provide a valid id" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ err: err.message, message: "Error updating property" });
    });
});

router.get("/manager/:id", (req, res) => {
  // Auth
  // Get all properties by manager id
  const id = req.params.id;
  User.findUserById(id)
    .then((user) => {
      if (user.role.toLowerCase() != "manager") {
        res.status(400).json({ message: `Please supply a manager id` });
      } else {
        Properties.findManagersProperties(id)
          .then((properties) => {
            if (properties) {
              res.status(200).json({ user, properties });
            } else {
              res.status(404).json({
                message: `Manager ${id} does not have any properties`,
              });
            }
          })
          .catch((err) =>
            res.status(500).json({
              error: "Failed to get managers properties",
              err: err.message,
            })
          );
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: err.message, message: `Could not find manager ${id}` });
    });
});

router.delete(
  "/:id",
  authenticate,
  roleCheck,
  propertyMiddleware,
  (req, res) => {
    // Auth
    // Deletes property by ID
    const id = req.params.id;
    Properties.remove(id)
      .then((nan) =>
        res.status(204).json({ message: `Property ${id} has been deleted` })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ error: "Failed to delete property", err: err.message })
      );
  }
);

router.get("/:id/units", (req, res) => {
  const { id } = req.params;

  Properties.findById(id)
    .then((property) => {
      if (property) {
        Units.getPropertiesUnits(id)
          .then((units) => {
            res.status(200).json({ property, units });
          })
          .catch((err) => {
            res
              .status(500)
              .json({ error: "Failed to get units", err: err.message });
          });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Failed to get property", err: err.message });
    });
});

module.exports = router;
