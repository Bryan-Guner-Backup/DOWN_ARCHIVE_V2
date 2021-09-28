const db = require('../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findBySurveyId,
    findByRoleId,
    findById,
    update,
    remove
};

async function find() {
    return db('survey_role')
}

function findBy(filter) {
    return db('survey_role').where(filter);
}

async function add(survey_role) {
    const [id] = await db('survey_role').insert(survey_role, 'role_id');
    return findByRoleId(id);
}

function findBySurveyId(id) {
    return db('survey_role').where('survey_id', id);
}

function findByRoleId(id) {
    return db('survey_role').where('role_id', id);
}

function findById(id) {
    return db('survey_role').where('id', id);
}

function update(id, changes) {
    return db('survey_role')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findBy(id);
        });

}

function remove(id) {
    return db('survey_role').where('id', id).del()
}