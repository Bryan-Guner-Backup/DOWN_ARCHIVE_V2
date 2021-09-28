const db = require('../../data/dbConfig');

module.exports = {
  find,
  findById,
  findByUser,
  add,
  addproject,
  update,
  remove
};

function find() {
  return db(`project`);
}
function findById(id) {
  return db(`project`).where({ id });
}
async function findByUser(user_id) {
  return await db('project').where({user_id})
}
async function add(project) {
  const [id] = await db('project').insert(project).into('project');

  return findById(id);
}
function update(id, changes) {
  return db(`project`)
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db(`project`)
    .where({ id })
    .delete();
}
function addproject(project) {
    return db('project')
    .insert(project)
    .into('project');
    }