//prettier-ignore
exports.up = async function (knex) {
  await knex.schema.createTable("applications", (tbl) => {
    tbl.increments();
    tbl.string("first_name", 225).notNullable();
    tbl.string("last_name", 225).notNullable();
    tbl.string("marital_status", 255).notNullable();
    tbl.string("email", 225).notNullable();
    tbl.date("move_in_date").notNullable();
    tbl.integer("lease_terms", 128).notNullable();
    tbl.date("date_of_birth").notNullable();
    tbl.string("app_address", 128).notNullable();
    tbl.string("app_city", 128).notNullable();
    tbl.string("app_state", 128).notNullable();
    tbl.string("app_zip", 128).notNullable();
    tbl.string("app_country", 128);
    tbl.string("government_id", 256).notNullable();
    tbl.string("social_security", 64).notNullable();
    tbl.string("document").notNullable();
    tbl.string("status", 128).notNullable();
    tbl.integer("unit_id").unsigned().notNullable().references("id").inTable("units").onUpdate("CASCADE").onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("applications");
};
