const router = require("express").Router();
const db = require("../models/projectsModel");

//============================Create Router
router.post("/", async (req, res) => {
  
    try {
      const project = req.body;
      const inserted = await db.addproject(project);
      res.status(201).json({ message: "project created" })
    } catch (error) {
      res.status(500).json({ error: "A problem occured"})
    }
});
//============================Read Router
router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the projects" });
  }
});

//-----------------------Read By Id
router.get("/:id", async (req, res) => {
    try {
        const project = await db.findById(req.params.id);
        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ message: "We could not find the project" });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error retrieving the project" });
      }
});

//============================Update Router
router.put("/:id", async (req, res) => {
    const changes = req.body;

    if (changes) {
      try {
        const updated = await db.update(req.params.id, changes);
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            message: "That project does not exist"
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error updating the project" });
      }
    } else {
      res.status(400).json({
        message: "Please provide changes to update the project"
      });
    }
});

//============================Delete Router
router.delete("/:id", async (req, res) => {
    try {
        const count = await db.remove(req.params.id);
        if (count > 0) {
          res.status(204).end();
        } else {
          res.status(404).json({
            message: "That project does not exist, perhaps they were deleted already"
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error removing the project" });
      }
});

module.exports = router;