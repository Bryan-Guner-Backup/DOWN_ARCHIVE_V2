const express = require("express");
const applications = require("./applications-model");
const router = express.Router();

const authenticate = require("../00-auth/restricted-middleware");
const roleCheck = require("../00-auth/role-check");

router.post("/", (req, res) => {
  const app = req.body;
  applications
    .addApp(app)
    .then((application) => {
      res.status(200).json({ application });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/", authenticate, roleCheck, (req, res) => {
  applications
    .findAllApps()
    .then((applications) => {
      res.status(200).json({ applications });
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to get all applications", err: err.message })
    );
});

router.get("/:id", authenticate, roleCheck, (req, res) => {
  const { id } = req.params;
  applications
    .findAppById(id)
    .then((application) => {
      if (application) {
        res.status(200).json({ application });
      } else {
        res.status(400).json({ message: "Please supply a valid id" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Failed to get the application", err: err.message });
    });
});

router.put("/:id", authenticate, roleCheck, (req, res) => {
  const id = req.params.id;
  const application = req.body;
  applications
    .updateApp(application, id)
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
        .json({ err: err.message, message: "Error updating application" });
    });
});

router.delete("/:id", authenticate, roleCheck, (req, res) => {
  const id = req.params.id;
  applications
    .removeApp(id)
    .then((nan) =>
      res
        .status(204)
        .json({ message: `Application id: ${id} has been deleted` })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to delete application", err: err.message })
    );
});

module.exports = router;
