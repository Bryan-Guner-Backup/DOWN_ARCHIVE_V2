exports.seed = function (knex) {
  return knex("users").then(function () {
    return knex("users").insert([
      {
        id: 1,
        okta_uid: "okta_unique_id",
      },
    ]);
  });
};
