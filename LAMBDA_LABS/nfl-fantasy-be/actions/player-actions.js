// Database Configuration File
const db = require('../database/dbConfig');

module.exports = {
  find,
  findById
}

function find() {
  return db("players")
}

function findById(id) {
  return db("players")
    .where({ id })
}
