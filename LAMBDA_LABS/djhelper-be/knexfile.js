require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_DEV_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    // TODO: Add testing configuration details
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  },

  // testing: {
  //   // TODO: Add testing configuration details
  //   client: 'sqlite3',
  //   useNullAsDefault: true,
  //   connection: { filename: './data/test.db3' },
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: { directory: './data/seeds' }
  // },

  production: {
    // TODO: Add production configuration details
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  }
};
