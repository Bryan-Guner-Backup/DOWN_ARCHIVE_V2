exports.up = function (knex) {
  return knex.schema.createTable('data', (tbl) => {
    tbl.increments('id').notNullable();
    tbl.string('eventId').notNullable().unique();
    tbl.json('event').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('data');
};
