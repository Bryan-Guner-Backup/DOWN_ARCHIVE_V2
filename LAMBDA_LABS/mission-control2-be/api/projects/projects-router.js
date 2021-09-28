const express = require("express");
const Data = require("./projects-model");
const TagDB = require("../tags/tags-model");

// import validate ProjectId middleware
const validateProjectId = require("../../middleware/validateProjectId.js");

const router = express.Router();

router.get("/", (req, res) => {
  Data.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving projects' })
    })
})


router.get("/:id", (req, res) => {
  Data.findById(req.params.id)
    .then((project) => {
      project
        ? res.status(200).json(project)
        : res.status(404).json({ message: "Project not found" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error retrieving the specified project" });
    });
});

router.post("/", (req, res) => {
  Data.add(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error adding the project' })
    })
})

router.put("/:id", (req, res) => {
  Data.update(req.params.id, req.body)
    .then((project) => {
      project
        ? res.status(200).json(project)
        : res.status(404).json({
            message: "The project with the specified id could not be found",
          });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating the project' })
    })
})

router.delete("/:id", (req, res) => {
  Data.remove(req.params.id)
    .then((count) => {
      count > 0
        ? res.status(200).json({ message: "This project has been removed" })
        : res.status(404).json({ message: "This project could not be found" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error removing the project",
      });
    });
});

// add tag to a project
router.post("/:id/tags", validateProjectId, (req, res) => {
  const tagId = req.body.id;
  const id = req.params.id;
  TagDB.addTagToProject(tagId, id)
    .then((tags) => {
      res.status(201).json({
        project_name: tags[0]["project_name"],
        tag_name: tags.map((item) => item.tag_name),
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add tags to this project" });
    });
});

// get tags from a project
router.get("/:id/tags", validateProjectId, (req, res) => {
  const id = req.params.id;
  TagDB.findTagsOfProject(id)
    .then((tags) => {
      res.status(200).json({
        project_name: tags[0]["project_name"],
        tag_name: tags.map((item) => item.tag_name),
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tags of this project" });
    });
});

// delete tag of a project
router.delete("/:projectId/tags/:tagId", (req, res) => {
  const projectId = req.params.projectId;
  const tagId = req.params.tagId;
  TagDB.removeTagOfProject(tagId, projectId)
    .then((result) => {
      res
        .status(200)
        .json({ message: "This tag has been removed from this project" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to remove the tag of this project" });
    });
});

module.exports = router;
