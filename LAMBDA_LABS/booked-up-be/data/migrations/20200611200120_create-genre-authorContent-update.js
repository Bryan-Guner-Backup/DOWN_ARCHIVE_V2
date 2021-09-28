exports.up = async (knex) => {
  return knex.schema

    .table("author_content", (tbl) => {
      tbl.string("public_id", 255);
    })

    .table("genres", (tbl) => {
      tbl.boolean("fantasy").defaultTo(false).alter();
      tbl.boolean("science_fiction").defaultTo(false).alter();
      tbl.boolean("horror").defaultTo(false).alter();
      tbl.boolean("western").defaultTo(false).alter();
      tbl.boolean("romance").defaultTo(false).alter();
      tbl.boolean("thriller").defaultTo(false).alter();
      tbl.boolean("mystery").defaultTo(false).alter();
      tbl.boolean("detective").defaultTo(false).alter();
      tbl.boolean("dystopia").defaultTo(false).alter();
      tbl.boolean("adventure").defaultTo(false).alter();
      tbl.boolean("memoir").defaultTo(false).alter();
      tbl.boolean("biography").defaultTo(false).alter();
      tbl.boolean("play").defaultTo(false).alter();
      tbl.boolean("musical").defaultTo(false).alter();
      tbl.boolean("theatre").defaultTo(false).alter();
      tbl
        .integer("user_id", 255)
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async (knex) => {
  return knex.schema
    .table("author_content", (tbl) => {
      tbl.dropColumn("public_id");
    })
    .table("genres", (tbl) => {
      tbl.dropColumn("fantasy");
      tbl.dropColumn("science_fiction");
      tbl.dropColumn("horror");
      tbl.dropColumn("western");
      tbl.dropColumn("romance");
      tbl.dropColumn("thriller");
      tbl.dropColumn("mystery");
      tbl.dropColumn("detective");
      tbl.dropColumn("dystopia");
      tbl.dropColumn("adventure");
      tbl.dropColumn("memoir");
      tbl.dropColumn("biography");
      tbl.dropColumn("play");
      tbl.dropColumn("musical");
      tbl.dropColumn("theatre");
      tbl.dropColumn("user_id");
    });
};
