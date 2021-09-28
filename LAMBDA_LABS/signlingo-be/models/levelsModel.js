const db = require("../data/dbconfig");

module.exports = {
  getAllLevels() {
    return db("levels");
  },
  getUserLevelsByOktaUID(oktaUID) {
    return db("user_levels").where("okta_uid", oktaUID);
  },
  addUserLevel(oktaUID, levels) {
    let promises = [];
    for (let i = 0; i < levels.length; i++) {
      promises.push(
        db("user_levels").insert({
          okta_uid: oktaUID,
          level_id: levels[i],
        })
      );
    }
    return Promise.all(promises);
  },
  completeFlashcard(levelID, oktaUID) {
    return db("user_levels").where({
      level_id: levelID,
      okta_uid:  oktaUID
    }).update({
      completed_flashcards: Date(),
    })
  },
  completeExercise(levelID, oktaUID) {
    return db("user_levels").where({
      level_id: levelID,
      okta_uid:  oktaUID
    }).update({
      completed_exercises: Date(),
    })
  },
  completeQuiz(levelID, oktaUID) {
    return db("user_levels").where({
      level_id: levelID,
      okta_uid:  oktaUID
    }).update({
      completed_quiz: Date(),
    })
  },
};
