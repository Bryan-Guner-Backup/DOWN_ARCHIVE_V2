exports.seed = function (knex) {
  return knex("levels").then(function () {
    return knex("levels").insert([
      {
        id: 1,
        name: "ABCDE",
      },
      {
        id: 2,
        name: "FGHIJ",
      },
      {
        id: 3,
        name: "KLMNO",
      },
      {
        id: 4,
        name: "PQRST",
      },
      {
        id: 5,
        name: "UVWXYZ",
      },
    ]);
  });
};
