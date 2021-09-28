const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findByCommId
};

async function find() {
    return db('zone as z')
        .join('community as c', 'c.id', 'z.community_id')
        .select('z.id', 'z.zone_letter', 'z.community_id', 'c.community as community_name')
}

function findBy(filter) {
    return db('zone').where(filter);
}

async function add(zone) {
    const [id] = await db('zone').insert(zone, 'id');
    return findById(id);
}

function findById(id) {
    return db('zone').where('id', id).first();
}

function findByCommId(id) {
    return db('zone').where('community_id', id);
}

function update(id, changes) {
    return db('zone')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('zone').where('id', id).del()
}
