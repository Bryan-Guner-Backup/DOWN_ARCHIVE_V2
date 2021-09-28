exports.up = (knex) => {
  return knex.schema.createTable('statuses', function (tbl) {
    tbl.increments('status_id').primary();
    tbl.string('status').notNullable().unique();
    tbl.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('statuses');
};
