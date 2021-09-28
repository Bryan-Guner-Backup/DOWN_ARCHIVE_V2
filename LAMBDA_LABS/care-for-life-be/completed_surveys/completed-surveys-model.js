const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findById,
    update,
    remove
};

async function find() {
    return db('completed_survey')
}

function findById(id) {
    return db('completed_survey as cs')
        .where('cs.id', id)
        .first();
}

async function add(survey) {
    const [id] = await db('completed_survey').insert(survey, 'id');
    return findById(id);
}

function update(id, changes) {
    return db('completed_survey')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('completed_survey').where('id', id).del()
}