const db = require('../data/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove,
	findCommunityDetails
};


async function find() {
	const comm = await db('community');
	const zones = await db('zone');
	const mapped = comm.map((e, i) => {
		return zones.filter(el => el.community_id == comm[i].id)
	})

	const results = comm.map((el, i) => {
		return {
			id: el.id,
			community: el.community,
			zones: mapped[i]
		}
	})
	return results;
}

async function findCommZones() {
	return db('community')
		.then(community => {
			return db('zone')

		})
}

function findBy(filter) {
	return db('community').where(filter);
}

async function add(community) {
	const [id] = await db('community').insert(community, 'id');
	return findById(id);
}

function findById(id) {
	return db('community').where('id', id).first();
}

function update(id, changes) {
	return db('community')
		.where('id', id)
		.update(changes, 'id')
		.then(() => {
			return findById(id);
		});

}

function remove(id) {
	return db('community').where('id', id).del()
}


async function findCommunityDetails(id) {
	const user = await findById(id)
	if (user == undefined) {
		return
	} else {
		return db('community as c')
			.where('c.id', id)
			.select('c.id', 'c.community')
			.first()
			.then(community => {
				return db('zone as z')
					.where('z.community_id', community.id)
					.select('z.id', 'z.zone_letter')
					.then(zone_info => {
						return db('family as f')
							.where('f.zone_id', zone_info.id)
							.select('f.family_name')
							.then(family_info => {
								return {
									...community,
									...zone_info,
									...family_info
								}
							})
					})
			})
	}
}
