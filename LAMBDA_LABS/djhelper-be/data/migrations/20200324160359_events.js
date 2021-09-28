exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
    // ------------------- Events Table ---------------------
    tbl.increments();
    tbl
      .integer('dj_id')
      .unsigned()
      .references('id')
      .inTable('djs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.text('img_url');
    tbl.text('name', 128).notNullable();
    tbl.string('date').notNullable();
    tbl
      .boolean('isExplicit')
      .notNullable()
      .defaultTo('false');
    tbl.text('notes', 1024);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
