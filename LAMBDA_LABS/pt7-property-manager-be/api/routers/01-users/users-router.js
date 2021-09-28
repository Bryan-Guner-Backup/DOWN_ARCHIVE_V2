// Router setup and model import
const express = require("express");
const User = require("./users-model");
const router = express.Router();
const bcrypt = require("bcryptjs");
// Authenticate
const authenticate = require("../00-auth/restricted-middleware");
const idCheck = require("../00-auth/id-check");

router.get("/", (req, res) => {
  // Get all users
  User.findAllUsers()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all users", err: err.message })
    );
});

router.get("/:id", (req, res) => {
  // Get user by ID
  const { id } = req.params;
  User.findUserById(id)
    .then(user => {
      console.log(user);
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get user", err: err.message });
    });
});

router.get("/manager/:id", (req, res) => {
  // Get manager by ID
  const { id } = req.params;
  User.findManagerById(id)
    .then(manager => {
      console.log(manager);
      if (manager && manager.role.toLowerCase() === "manager") {
        res.status(200).json({ manager });
      } else {
        res.status(400).json({ message: "Please supply a valid Manager ID" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Failed to get manager", err: err.message });
    });
});

router.put("/:id", authenticate, idCheck, (req, res) => {
  // Updates user by
  const id = req.params.id;
  const user = req.body;

  // If password, hash it
  if (user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    User.updateUser(user, id)
      .then(updated => {
        if (updated) {
          res.status(200).json({ updated });
        } else {
          res.status(400).json({ message: "Please provide a valid id" });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ err: err.message, message: "Error updating Manager" });
      });
    // If no password, continue to update
  } else {
    User.updateUser(user, id)
      .then(updated => {
        if (updated) {
          res.status(200).json({ updated });
        } else {
          res.status(400).json({ message: "Please provide a valid id" });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ err: err.message, message: "Error updating Manager" });
      });
  }
});

router.delete("/:id", authenticate, idCheck, (req, res) => {
  // Deletes User by ID
  const id = req.params.id;
  User.removeUser(id)
    .then(user =>
      res.status(204).json({ message: `User ${id} has been deleted` })
    )
    .catch(err =>
      res.status(500).json({ error: "Failed to delete user", err: err.message })
    );
});

module.exports = router;
