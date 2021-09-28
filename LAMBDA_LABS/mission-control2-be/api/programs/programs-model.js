const db = require('../../data/db-config.js')

module.exports = {
  find,
  findById,
  findProducts,
  add,
  update,
  remove,
}

function find() {
  return db('programs')
}

function findById(id) {
  return db('programs').where({ id }).first()
}

function findProducts(id) {
  return db('programs')
    .join('products', 'programs.id', 'products.programKey')
    .select(
      'products.id',
      'products.name',
      'products.programKey',
      'products.active'
    )
    .where('programKey', id)
}

function add(program) {
  return db('programs')
    .insert(program, 'id')
    .then(([id]) => {
      return this.findById(id)
    })
}

function update(id, changes) {
  return db('programs').where({ id }).update(changes, '*')
}

function remove(id) {
  return db('programs').where({ id }).del()
}
