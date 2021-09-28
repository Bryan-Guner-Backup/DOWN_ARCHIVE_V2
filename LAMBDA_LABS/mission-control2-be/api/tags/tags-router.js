const express = require("express");

const TagsDB = require("./tags-model.js");

const router = express.Router();

// get all tags
router.get("/", (req, res) => {
  TagsDB.find()
    .then((tags) => {
      res.status(200).json(tags);
    })
    .catch((err) => {
      res.status(500).json({ error: "Tags could not be retrieved" });
    });
});

// get a tag by id
router.get("/:id", (req, res) => {
  TagsDB.findById(req.params.id)
    .then((tag) => {
      tag
        ? res.status(200).json(tag)
        : res.status(400).json({ error: "Tas not found" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Tag could not be retrieved" });
    });
});

// add a tag
router.post("/", (req, res) => {
  TagsDB.add(req.body)
    .then((tag) => {
      res.status(201).json(tag);
    })
    .catch((err) => {
      res.status(500).json({
        error: "There was an error while adding the tag to the database.",
      });
    });
});

// update a tag
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  TagsDB.update(id, changes)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error updating tag." });
    });
});

// delete a tag
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  TagsDB.remove(id)
    .then((tag) => {
      res.status(200).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error removing tag." });
    });
});

module.exports = router;
