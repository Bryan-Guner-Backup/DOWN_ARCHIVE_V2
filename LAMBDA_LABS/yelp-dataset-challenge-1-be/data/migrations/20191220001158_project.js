exports.up = function(knex, Promise) {
    return knex.schema.createTable("project", tbl => {
      tbl.increments();

      tbl.text("project");

      tbl
      .string('email')
      .unsigned()
      .references('email')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("project");
  };