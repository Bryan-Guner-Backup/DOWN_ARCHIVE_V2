const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findByZone,
    findMembersById
};

async function find() {
    return db('family as f')
        .join('zone as z', 'z.id', 'f.zone_id')
        .select('f.id', 'f.family_name', 'f.zone_id', 'z.zone_letter as zone_name', 'z.community_id as community_id')
}

function findBy(filter) {
    return db('family').where(filter);
}

async function add(user) {
    const [id] = await db('family').insert(user, 'id');
    return findById(id);
}

function findByFamilyId(id) {
    return db('individual').where('family_id', id);
}

async function findByZone(zoneId) {

    const families = await db('family').where('zone_id', zoneId);
    const members = await db('individual')

    const mapped = families.map((e, i) => {
        return members.filter((el) => {
            return el.family_id == families[i].id
        })
    })

    const results = families.map((e, i) => {
        return {
            id: e.id,
            family_name: e.family_name,
            members: mapped[i]
        }
    })
    return results;
}

function findById(id) {
    return db('family').where('id', id).first();
}

function findMembersById(id) {
    return db('family')
        .where('id', id)
        .first()
        .then(family => {
            return db('individual as i')
                .where('i.family_id', id)
                .then(members => {
                    return {
                        ...family,
                        members
                    }
                })
        })
}

function update(id, changes) {
    return db('family')
        .where('id', id)
        .update(changes, 'id')
        .then(() => {
            return findById(id);
        });

}

function remove(id) {
    return db('family').where('id', id).del()
}