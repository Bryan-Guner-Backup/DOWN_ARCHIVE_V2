const db = require('../../data/dbConfig');

module.exports = {
	findAll,
	findById,
	deleteRec,
	editRec,
	addRec,
	getRecognition,
	getBadges,
	getRecByOrg,
};

function findAll() {
	return db('Recognition');
}

function findById(id) {
	return db('Recognition').where({ id });
}

function deleteRec(id) {
	return db('Recognition')
		.where({ id })
		.del();
}

function editRec(id, changes) {
	return db('Recognition')
		.where({ id })
		.update(changes);
}

function addRec(obj) {
	return db('Recognition')
		.insert(obj)
		.returning('*')
		.then(([rec]) => getRecognition(rec.id));
}

function getRecognition(id) {
	return db
		.select(
			's.*',
			'i.*',
			'o.name as org_name',
			'r.last_name as recipient_last',
			'r.first_name as recipient_first',
			'r.profile_picture as recipient_picture',
		)
		.from('Recognition as i')
		.join('Users as s', 'i.sender', '=', 's.id')
		.join('Users as r', 'i.recipient', '=', 'r.id')
		.join('Employees as e', 's.id', 'e.user_id')
		.join('Organizations as o', 'e.org_id', 'o.id')
		.where('i.id', '=', id);
}

function getBadges() {
	return db('Badges');
}

async function getRecByOrg(org_id, query = {}) {
	const { page = 1, limit = 10, sortby = 'date', sortdir = 'desc' } = query;
	const offset = limit * (page - 1);
	const recognitions = await db('Recognition as i')
		.join('Users as s', 'i.sender', '=', 's.id')
		.join('Users as r', 'i.recipient', '=', 'r.id')
		.join('Employees as e', 's.id', 'e.user_id')
		.join('Organizations as o', 'e.org_id', 'o.id')
		.select(
			's.*',
			'i.*',
			'o.name as org_name',
			'r.last_name as recipient_last',
			'r.first_name as recipient_first',
			'r.profile_picture as recipient_picture',
		)
		.where('e.org_id', '=', org_id)
		.orderBy(sortby, sortdir)
		.limit(limit)
		.offset(offset);

	let { count } = await db('Recognition')
		.where({ org_id })
		.count()
		.first();
	count = Number(count);

	return {
		count,
		recognitions,
	};
}
