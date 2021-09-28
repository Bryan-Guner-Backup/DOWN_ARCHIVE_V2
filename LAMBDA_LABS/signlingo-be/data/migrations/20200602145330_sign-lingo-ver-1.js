// Link to DB Schema https://dbdesigner.page.link/iEg1SoCNyGXD7KEt6

exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("okta_uid").unique().notNullable().index();  
      // using okta user ID to identify user, their email and 
      // password are saved on the okta backend
    })
    .createTable("levels", (tbl) => {
      tbl.increments();
      tbl.string("name").index();
    })
    .createTable("flashcards", (tbl) => {
      tbl.increments();
      tbl.string("sign").unique();
      tbl.string("visual").unique();
      tbl
        .integer("level_id")
        .references("id")
        .inTable("levels")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("user_levels", (tbl) => {
      tbl.increments();
      tbl
        .string("okta_uid")
        .references("okta_uid")
        .inTable("users")
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("level_id")
        .references("id")
        .inTable("levels")
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("completed_flashcards").defaultTo(null); // These fields will be holding Date() values as a string to stand in for a timestamp. 
      tbl.string("completed_exercises").defaultTo(null); // To use these, do Date.parse(date) after retrieval from the database.
      tbl.string("completed_quiz").defaultTo(null);
    });
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("user_levels")
    .dropTableIfExists("flashcards")
    .dropTableIfExists("levels")
    .dropTableIfExists("users");
};
