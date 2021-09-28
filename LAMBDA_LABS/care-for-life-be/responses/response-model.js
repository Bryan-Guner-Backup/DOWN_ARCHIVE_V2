const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findByQuestionId
};

async function find() {
    return db('response as r')
        .join('completed_survey as cs', 'cs.id', 'r.completed_survey_id')
        .join('question as q', 'q.id', 'r.question_id')
        .join('individual as i', 'i.id', 'r.individual_id')
        .join('family as f', 'f.id', 'r.family_id')
        .select('r.id', 'q.question', 'r.question_id', 'r.response', 'r.completed_survey_id', 'r.family_id', 'r.individual_id', 'i.first_name', 'i.last_name', 'f.family_name')

}

function findBy(filter) {
    return db('response').where(filter);
}

async function add(response) {
    const [id] = await db('response').insert(response, 'id');
    return findById(id);
}

function findById(id) {
    return db('response').where('id', id).first();
}

function findByQuestionId(id) {
    return db('response as r')
        .where('question_id', id)
        .join('completed_survey as cs', 'cs.id', 'r.completed_survey_id')
        .join('question as q', 'q.id', 'r.question_id')
        .join('individual as i', 'i.id', 'r.individual_id')
        .join('family as f', 'f.id', 'r.family_id')
        .select('r.id', 'q.question', 'r.question_id', 'r.response', 'r.completed_survey_id', 'r.family_id', 'r.individual_id', 'i.first_name', 'i.last_name', 'f.family_name')
}

function update(id, changes) {
    return db('response')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('response').where('id', id).del()
}