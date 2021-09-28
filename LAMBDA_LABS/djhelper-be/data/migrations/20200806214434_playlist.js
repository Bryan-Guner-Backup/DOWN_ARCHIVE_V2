exports.up = function(knex) {
  return knex.schema.createTable('playlist', tbl => {
    // ------------- Playlist Connections Table -------------
    tbl.increments();
    tbl.text('spotify_id', 128);
    tbl.text('name', 128).notNullable();
    tbl.text('artist_name', 128);
    tbl.text('url', 128);
    tbl
      .boolean('isExplicit')
      .notNullable()
      .defaultTo('false');
    tbl.text('preview');
    tbl.text('img');
    tbl
      .integer('event_id')
      .unsigned()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('playlist');
};

// delete this table as per the new design; playlist and event are the same table
