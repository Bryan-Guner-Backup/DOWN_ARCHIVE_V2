require('dotenv').config();

///

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'care_for_life',
      user: process.env.USERNAME || 'postgres',
      password: process.env.PASSWORD,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  testing: {
    client: 'pg',
    connection: {
      database: 'care_for_life_test',
      user: process.env.USERNAME || 'postgres',
      password: process.env.PASSWORD,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};