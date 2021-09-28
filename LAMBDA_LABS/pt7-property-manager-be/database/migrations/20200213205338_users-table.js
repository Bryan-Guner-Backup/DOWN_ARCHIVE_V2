exports.up = async function(knex) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("email", 128)
      .notNullable()
      .unique();
    tbl.string("password", 128).notNullable();
    tbl.string("phoneNumber", 12);
    tbl.string("firstName", 128).notNullable();
    tbl.string("lastName", 128).notNullable();
    tbl.string("role", 128).notNullable();
    tbl.string("img", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
