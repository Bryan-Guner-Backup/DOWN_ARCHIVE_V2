exports.up = async function(knex) {
  await knex.schema.createTable("fans", fans => {

    fans.increments("fan_id")

    fans.string("username")
      .notNullable()
      .unique()

    fans.string("password")
      .notNullable()

    fans.string("email")
      .notNullable()
      .unique()

    fans.string("first_name")
      .notNullable()

    fans.string("last_name")
      .notNullable()

    fans.string("city")
      .notNullable()

    fans.string("state", 2)
      .notNullable()

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fans")
};
