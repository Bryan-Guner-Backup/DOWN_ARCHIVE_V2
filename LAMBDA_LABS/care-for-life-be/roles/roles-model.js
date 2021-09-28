const db = require('../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

async function find() {
    return db('role')
    // const id = db('users').select('id').orderBy('id')
    // const arrId = id.map(id => { return id.id });
    // return await arrId.map(id => findUserDetails(id))
}

function findBy(filter) {
    return db('role').where(filter);
}

async function add(user) {
    const [id] = await db('role').insert(user, 'id');
    return findById(id);
}

function findById(id) {
    return db('role').where('id', id).first();
}

function update(id, changes) {
    return db('role')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('role').where('id', id).del()
}