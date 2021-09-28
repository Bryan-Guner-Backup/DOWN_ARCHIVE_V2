const db = require("../data/dbconfig");

module.exports = {
    getFlashcardsByLevelID(levelID) {
        return db("flashcards").where("level_id", levelID);
    },
}