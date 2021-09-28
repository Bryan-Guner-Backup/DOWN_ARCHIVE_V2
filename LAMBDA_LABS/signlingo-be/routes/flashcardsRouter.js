const router = require("express").Router();
const Flashcards = require("../models/flashcardsModel");

router.get("/:levelID", (req, res) => {
    Flashcards.getFlashcardsByLevelID(req.params.levelID)
    .then(flashcards => {
        res.status(200).json(flashcards)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;