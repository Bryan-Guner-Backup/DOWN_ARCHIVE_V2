const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findSurveyQuestions
};

async function find() {
    return db('survey')
    // const id = db('users').select('id').orderBy('id')
    // const arrId = id.map(id => { return id.id });
    // return await arrId.map(id => findUserDetails(id))
}

function findBy(filter) {
    return db('survey').where(filter);
}

async function add(survey) {
    const [id] = await db('survey').insert(survey, 'id');
    return findById(id);
}

function findById(id) {
    return db('survey').where('id', id).select("id", "survey_name").first();
}

// function findByType(type) {
//     return db('surveys').where('type', type).select("id", "name", "type");
// }

function findSurveyQuestions(id) {
    return db('survey')
        .where('id', id)
        .select("id", "survey_name")
        .first()
        .then(survey => {
            return db('question as q')
                .where('q.survey_id', survey.id)
                .select('q.question', 'q.id', 'q.question_type')
                .then(sq => {
                    return {
                        ...survey,
                        sq
                    }
                })
        })
}

function update(id, changes) {
    return db('survey')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('survey').where('id', id).del()
}