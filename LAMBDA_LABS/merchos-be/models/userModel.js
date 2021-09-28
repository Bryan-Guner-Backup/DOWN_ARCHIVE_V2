const db = require('../database/db-config');

const add = user => {
  return db('users')
    .insert(user)
    .returning('id')
    .then(ids => findById(ids[0]));
};

const addRole = role => {
  return db('roles').insert(role);
};

const findAllRoles = () => {
  return db('roles');
};

const findAll = () => {
  return db('users');
};

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const findById = id => {
  return db('users')
    .where({ id })
    .first();
};

const remove = id => {
  return db('users')
    .where({ id })
    .del();
};

function checkInUse(username) {
  return db('users')
    .where({ username })
    .first();
}

module.exports = {
  add,
  addRole,
  findAllRoles,
  findAll,
  findBy,
  findById,
  remove,
  checkInUse
};
