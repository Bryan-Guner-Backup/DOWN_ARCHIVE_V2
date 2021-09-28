const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findIndividualDetails,
    findByFamilyId
};

async function find() {
    return db('individual as i')
        .join('family as f', 'f.id', 'i.family_id')
        .select('i.id', 'i.first_name', 'i.last_name', 'i.gender', 'i.date_of_birth', 'i.hoh', 'i.relation_to_hoh', 'i.family_id', 'f.family_name as family_name')
}

function findBy(filter) {
    return db('individual').where(filter);
}

async function add(individual) {
    const [id] = await db('individual').insert(individual, 'id');
    return findById(id);
}

function findById(id) {
    return db('individual').where('id', id).first();
}

function findByFamilyId(id) {
    return db('individual').where('family_id', id);
}

function update(id, changes) {
    return db('individual')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('individual').where('id', id).del()
}


async function findIndividualDetails(id) {
    const user = await findById(id)
    if (user == undefined) {
        return
    } else {
        return db('individual')
            .where('id', id)
            .first()
            .then(user => {
                return db('zone as z')
                    .where('z.id', user.zone_id)
                    .select('z.id', 'z.name')
                    .then(zone_info => {
                        return {
                            ...users,
                            zone_info
                        }

                    })
            })
    }
}