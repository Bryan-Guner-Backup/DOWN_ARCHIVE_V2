exports.up = function (knex) {
  return (
    knex.schema
      // Persons Table
      .createTable('persons', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Password
        tbl.string('password', 255).notNullable()
        // Email
        tbl.string('email', 255).notNullable().unique()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Programs Table
      .createTable('programs', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Code Climate Token
        tbl.string('codeClimateToken', 255).unique()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Products Table
      .createTable('products', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Program Key (FK)
        tbl
          .integer('programKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('programs')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        // Active
        tbl.boolean('active').notNullable()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Projects Table
      .createTable('projects', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Product Key (FK)
        tbl
          .integer('productKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('products')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        // Active
        tbl.boolean('active').notNullable()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Repositories Table
      .createTable('repositories', (tbl) => {
        // ID
        tbl.increments()
        // URL
        tbl.string('url', 255).notNullable()
        // Product Key (FK)
        tbl
          .integer('productKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('products')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })

      // Notes Table
      .createTable('notes', (tbl) => {
        // ID
        tbl.increments()
        // Project Key (FK)
        tbl
          .integer('projectKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        // Topic
        tbl.string('topic', 255).notNullable()
        // Content
        tbl.string('content', 255).notNullable()
        // Author
        tbl
          .integer('author')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('persons')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        // Private
        tbl.boolean('private').notNullable()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Roles Table
      .createTable('roles', (tbl) => {
        // ID
        tbl.increments()
        // Title
        tbl.string('title', 255).notNullable()
        // Project Key (FK)
        tbl
          .integer('projectKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })

      // Project Person Roles Table
      .createTable('project_person_roles', (tbl) => {
        // Project Key (FK)
        tbl
          .integer('projectKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        // Person Key (FK)
        tbl
          .integer('personKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('persons')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        // Roles Key (FK)
        tbl
          .integer('rolesKey')
          .unsigned()
          .references('id')
          .inTable('roles')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
  )
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_person_roles')
    .dropTableIfExists('person_roles')
    .dropTableIfExists('roles')
    .dropTableIfExists('notes')
    .dropTableIfExists('repositories')
    .dropTableIfExists('projects')
    .dropTableIfExists('products')
    .dropTableIfExists('programs')
    .dropTableIfExists('persons')
}
