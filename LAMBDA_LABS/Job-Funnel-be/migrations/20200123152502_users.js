
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()

      tbl.varchar('first_name',255 ).notNullable()

      tbl.varchar('last_name', 255).notNullable()

      tbl.varchar('email', 255).notNullable().unique()

      tbl.varchar("password", 255).notNullable()

      tbl.varchar("user_type", 255).notNullable()

      tbl.integer('company_id', 255)
      .references("id")
      .inTable("companies")
      .onDelete('SET NULL')

      tbl.integer('location_id', 255)
      .references("id")
      .inTable("locations")
      .onDelete('SET NULL')

      tbl.varchar('education', 255)

      tbl.varchar('about', 255)

      tbl.varchar('profile_img', 255)

      tbl.varchar('portfolio_url', 255)

      tbl.varchar('github_url', 255)

      tbl.varchar('linkedin_url', 255)

      tbl.varchar('resume', 255)
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};


