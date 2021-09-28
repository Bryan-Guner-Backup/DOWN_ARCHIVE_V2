const db = require('../../data/db-config')

module.exports = {
  find,
  findProjects,
  findById,
  add,
  addProject,
  update,
  remove,
}

function find() {
  return db('products')
}

function findProjects(id) {
  return db('products')
    .join('projects', 'products.id', 'projects.productKey')
    .select(
      'projects.id',
      'projects.name',
      'projects.productKey',
      'projects.active'
    )
    .where('productKey', id)
}

function findById(id) {
  return db('products').where({ id }).first()
}

function add(product) {
  return db('products')
    .insert(product, 'id')
    .then(([id]) => {
      return this.findById(id)
    })
}

function addProject(project, id) {
  return db('projects').insert({ ...project, productKey: id })
}

function update(id, changes) {
  return db('products').where({ id }).update(changes, '*')
}

function remove(id) {
  return db('products').where({ id }).del()
}
