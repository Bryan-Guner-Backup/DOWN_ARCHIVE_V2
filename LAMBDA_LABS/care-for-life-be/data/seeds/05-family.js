
exports.seed = function (knex) {
  return knex('family').insert([
    { family_name: 'Miller', zone_id: 1, community_id: 1 },
    { family_name: 'Smith', zone_id: 2, community_id: 1 },
    { family_name: 'Johnson', zone_id: 3, community_id: 1 },
    { family_name: 'Crabtree', zone_id: 4, community_id: 1 },
    { family_name: 'Etheridge', zone_id: 5, community_id: 2 },
    { family_name: 'Marshall', zone_id: 6, community_id: 2 },
    { family_name: 'Brooks', zone_id: 7, community_id: 2 },
    { family_name: 'Jameson', zone_id: 8, community_id: 2 },
    { family_name: 'Brown', zone_id: 9, community_id: 3 },
    { family_name: 'Garcia', zone_id: 10, community_id: 3 },
    { family_name: 'Libman', zone_id: 11, community_id: 3 },
    { family_name: 'Rojas', zone_id: 12, community_id: 3 },
  ]);
};
