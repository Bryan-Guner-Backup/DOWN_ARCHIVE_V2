require("dotenv").config();

module.exports = { 

  dev: {
    client: 'pg',
    connection: {
        host: 'localhost', 
        port: 5432,
        user: process.env.USER_DEV,
        password: process.env.PW_DEV,
        database: process.env.DB_DEV,
    },
    migrations: {
        directory: './database/migrations',
    },
    seeds: {
        directory: './database/seeds',
    },
},

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/test.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
},

  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL + `?ssl=true`,

    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      min: 2,
      max: 10,
    },
  }
}