exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tags")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tags").insert([
        { id: 1, name: "React" },
        { id: 2, name: "Redux" },
        { id: 3, name: "GraphQL" },
      ]);
    });
};
