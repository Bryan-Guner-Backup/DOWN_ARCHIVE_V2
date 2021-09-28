const express = require("express");
const WorkOrder = require("./workorders-model");
const router = express.Router();

router.get("/", (req, res) => {
  // Auth
  WorkOrder.findAllWorkOrder()
    .then(orders => {
      res.status(200).json({ orders });
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to get all work orders", err: err.message })
    );
});

router.post("/", (req, res) => {
  // Auth
  const order = req.body;
  WorkOrder.addWorkOrder(order)
    .then(prop => {
      res.status(200).json({ prop });
    })
    .catch(err => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/:id", (req, res) => {
  // Auth
  const { id } = req.params;
  WorkOrder.findWorkOrderById(id)
    .then(order => {
      if (order) {
        res.status(200).json({ order });
      } else {
        res.status(400).json({ message: "Please supply a valid ID" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Failed to get work order", err: err.message });
    });
});

router.put("/:id", (req, res) => {
  // Auth
  const id = req.params.id;
  const order = req.body;
  WorkOrder.updateWorkOrder(order, id)
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
        .json({ err: err.message, message: "Error updating work order" });
    });
});

router.delete("/:id", (req, res) => {
  // Auth
  const id = req.params.id;
  WorkOrder.removeWorkOrder(id)
    .then(nan =>
      res.status(204).json({ message: `Work order ${id} has been deleted` })
    )
    .catch(err =>
      res
        .status(500)
        .json({ error: "Failed to delete work order", err: err.message })
    );
});

module.exports = router;
