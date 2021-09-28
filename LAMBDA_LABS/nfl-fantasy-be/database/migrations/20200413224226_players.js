exports.up = async function (knex) {
  await knex.schema.createTable("players", (players) => {
    players.increments();
    players.string("playerID");

    players.string("playerFirst", 128)
      .notNullable();

    players.string("playerLast", 128)
      .notNullable();

    players.string("playerFull", 128)
      .notNullable();

    players.string("position")
      .notNullable();

    players.integer("startYear")
      .notNullable();

    players.string("currentTeam", 128)
      .notNullable();

    players.integer("height")
      .notNullable();

    players.integer("weight")
      .notNullable();

    players.date("dob")
      .notNullable();

    players.decimal("forty", 8, 2)
      .notNullable();

    players.integer("bench")
      .notNullable();

    players.decimal("vertical", 8, 2)
      .notNullable();

    players.integer("broad")
      .notNullable();

    players.decimal("shuttle", 8, 2)
      .notNullable();

    players.decimal("cone", 8, 2)
      .notNullable();

    players.decimal("arm", 8, 2)
      .notNullable();

    players.decimal("hand", 8, 2)
      .notNullable();

    players.decimal("dpos", 8, 2)
      .notNullable();

    players.string("col", 128)
      .notNullable();

    players.string("dv", 128)
      .notNullable();

    players.integer("jnum")
      .notNullable();

    players.integer("dcp")
      .notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("players");
};
