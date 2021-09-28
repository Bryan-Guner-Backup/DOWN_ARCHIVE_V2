const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

async function find() {
    return db('question as q')
        .join('survey as s', 's.id', 'q.survey_id')
        .join('question_type as qt', 'qt.id', 'q.question_type')
        .select("q.id", "q.question", 'q.question_type', 'q.survey_id', 'qt.type')
    // const id = db('users').select('id').orderBy('id')
    // const arrId = id.map(id => { return id.id });
    // return await arrId.map(id => findUserDetails(id))
}

function findBy(filter) {
    return db('question').where(filter);
}

async function add(question) {
    const [id] = await db('question').insert(question, 'id');
    return findById(id);
}

function findById(id) {
    return db('question as q')
        .where('q.id', id)
        .join('survey as s', 's.id', 'q.survey_id')
        .select("q.id", "q.question", 's.survey_name')
        .first()
}

function update(id, changes) {
    return db('question')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('question').where('id', id).del()
}