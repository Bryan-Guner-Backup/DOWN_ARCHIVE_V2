exports.seed = function (knex) {
  return knex("user_levels").then(function () {
    return knex("user_levels").insert([
      {
        id: 1,
        okta_uid: "okta_unique_id",
        level_id: 1,
        completed_flashcards: null,
        completed_exercises: null,
        completed_quiz: null,
      },
    ]);
  });
};
