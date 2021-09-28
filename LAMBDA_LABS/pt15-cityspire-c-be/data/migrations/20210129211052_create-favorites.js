exports.up = function (knex) {
  return knex.schema.createTable('favorites', function (table) {
    table.increments('id').notNullable().unique().primary();
    table
      .string('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.float('lat').notNullable();
    table.float('lng').notNullable();
    table.string('city_id').unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('favorites');
};
