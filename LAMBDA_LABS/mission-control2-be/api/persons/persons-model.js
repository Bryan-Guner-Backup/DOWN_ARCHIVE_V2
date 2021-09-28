const db = require('../../data/db-config')

module.exports = {
  find,
  findBy,
  findById,
  findByEmail,
  getPersonFromProject,
  addPersonToProject,
  add,
  update,
  remove,
}

function find() {
  return db('persons')
}

function findBy(filter) {
  return db('persons').where(filter)
}

function findByEmail(email) {
  return db('persons').where({ email }).first()
}

function findById(id) {
  return db('persons').where({ id }).first()
}

function add(person) {
  return db('persons')
    .insert(person, 'id')
    .then(([id]) => {
      return this.findById(id)
    })
}

function update(id, changes) {
  return db('persons').where({ id }).update(changes, '*')
}

function remove(id) {
  return db('persons').where({ id }).del()
}

// function addPersonToProject(person, project) {
//   console.log('***MODEL***', person, project)
//   return db('project_person_roles').insert({ ...project, personKey: id })
// }

function addPersonToProject(person, project) {
  return db('project_person_roles').insert({
    personKey: person,
    projectKey: project,
  })
}

function getPersonFromProject(id) {
  return db
    .select(
      'persons.id as personId',
      'projects.id as projectId',
      'products.id as productId',
      'programs.id as programId',
      'persons.name as personName',
      'projects.name as projectName',
      'products.name as productName',
      'programs.name as programName'
    )
    .from('project_person_roles')
    .join('persons', 'project_person_roles.personKey', 'persons.id')
    .join('projects', 'project_person_roles.projectKey', 'projects.id')
    .join('products', 'projects.productKey', 'products.id')
    .join('programs', 'products.programKey', 'programs.id')
    .where('personKey', id)
}
