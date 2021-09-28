const express = require("express");
const units = require("./units-model");
const router = express.Router();

const authenticate = require("../00-auth/restricted-middleware");
const roleCheck = require("../00-auth/role-check");
const unitsMiddleware = require("./units-middleware");

router.get("/", (req, res) => {
  units
    .findAllUnits()
    .then((units) => {
      res.status(200).json({ units });
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to get all units", err: err.message })
    );
});

router.post("/", authenticate, roleCheck, (req, res) => {
  const unit = req.body;
  units
    .addUnit(unit)
    .then((prop) => {
      res.status(200).json({ prop });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/:id", (req, res) => {
  // Auth
  const { id } = req.params;
  units
    .findUnitById(id)
    .then((unit) => {
      if (unit) {
        res.status(200).json({ unit });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to get unit", err: err.message });
    });
});

router.put("/:id", authenticate, unitsMiddleware, (req, res) => {
  const id = req.params.id;
  const unit = req.body;
  units
    .updateUnit(unit, id)
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
        .json({ err: err.message, message: "Error updating unit" });
    });
});

router.delete("/:id", authenticate, unitsMiddleware, (req, res) => {
  const id = req.params.id;
  units
    .removeUnit(id)
    .then((nan) =>
      res.status(204).json({ message: `Unit ${id} has been deleted` })
    )
    .catch((err) =>
      res.status(500).json({ error: "Failed to delete unit", err: err.message })
    );
});

module.exports = router;
