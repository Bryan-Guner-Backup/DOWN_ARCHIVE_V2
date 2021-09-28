exports.up = function(knex) {
  return knex.schema.createTable('djs', tbl => {
    tbl.increments();
    tbl
      .text('username', 128)
      .unique()
      .notNullable();
    tbl.text('password', 128).notNullable();
    tbl.text('name', 128);
    tbl.text('email').unique();
    tbl.text('phone');
    tbl.text('website');
    tbl.text('bio');
    tbl.text('profile_pic_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('djs');
};
