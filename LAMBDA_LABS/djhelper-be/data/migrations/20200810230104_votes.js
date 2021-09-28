exports.up = function(knex) {
  return knex.schema.createTable('votes', tbl => {
    // ------------- Playlist Connections Table -------------
    tbl.increments();
    tbl.text('isvoted', 128).notNullable();

    tbl
      .integer('dj_id')
      .unsigned()
      .references('id')
      .inTable('djs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl
      .integer('track_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('tracks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl
      .integer('playlist_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('playlist')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('votes');
};

// delete this table as per the new design; playlist and event are the same table
