const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  await knex.raw(
    'TRUNCATE TABLE votes, tracks, playlist, events,  djs CASCADE'
  );

  // return cleaner.clean(knex, {
  //   mode: 'truncate',
  //   ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  // });
};
