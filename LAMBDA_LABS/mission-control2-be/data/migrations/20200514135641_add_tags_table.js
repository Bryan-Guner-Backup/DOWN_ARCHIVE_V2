exports.up = function (knex) {
  return knex.schema
    .createTable("tags", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.boolean("isUsed").defaultTo(false);
    })
    .createTable("project_tag", (tbl) => {
      tbl
        .integer("projectKey")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("tagKey")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tags")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_tag").dropTableIfExists("tags");
};
