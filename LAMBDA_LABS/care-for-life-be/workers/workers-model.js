const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findByRole
};

async function find() {
    return db('worker')
}

function findBy({ email }) {
    return db('worker').where({ email: email });
}

async function add(worker) {
    const [id] = await db('worker').insert(worker, 'id');
    return findById(id);
}

function findById(id) {
    return db('worker').where('id', id).select("id", "first_name", "last_name", "email", "role_name", "zone_id", "community_id").first();
}

function findByRole(role) {
    return db('worker').where('role_name', role).select("id", "first_name", "last_name", "email", "role_name", "zone_id", "community_id");
}

function update(id, changes) {
    return db('worker')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('worker').where('id', id).del()
}