const express = require("express");
const lease_term = require("./leaseterms-model");
const router = express.Router();

router.post("/", (req, res) => {
  const lease = req.body;
  lease_term
    .addLeaseTerm(lease)
    .then((term) => {
      res.status(200).json({ term });
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/", (req, res) => {
  lease_term
    .findAllLeaseTerm()
    .then((lease_term) => {
      res.status(200).json({ lease_term });
    })
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to get all leases", err: err.message })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  lease_term
    .findLeaseTermById(id)
    .then((lease_term) => {
      if (lease_term) {
        res.status(200).json({ lease_term });
      } else {
        res.status(400).json({ message: "Please supply a valid id" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Failed to get the lease", err: err.message });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const lease = req.body;
  lease_term
    .updateLeaseTerm(lease, id)
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
        .json({ err: err.message, message: "Error updating lease term" });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  lease_term
    .removeLeaseTerm(id)
    .then((nan) =>
      res.status(204).json({ message: `Lease term id: ${id} has been deleted` })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to delete lease term", err: err.message })
    );
});

module.exports = router;
