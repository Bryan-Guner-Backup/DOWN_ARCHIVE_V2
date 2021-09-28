exports.up = async (knex) => {
  await knex.schema.createTable('groomer_favorites', (table) => {
    table.increments('id');
    table
      .string('customer_id')
      .references('user_id')
      .inTable('customer')
      .onDelete('cascade')
      .onUpdate('cascade')
      .notNull();
    table
      .string('groom_id')
      .references('user_id')
      .inTable('groomer')
      .onDelete('cascade')
      .onUpdate('cascade')
      .notNull();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('groomer_favorites');
};
