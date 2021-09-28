const serviceProviderPairs = [
  {
    service_provider_id: 1,
    service_entries_id: 1,
  },
  {
    service_provider_id: 2,
    service_entries_id: 4,
  },
  {
    service_provider_id: 4,
    service_entries_id: 2,
  },
  {
    service_provider_id: 3,
    service_entries_id: 3,
  },
];

exports.seed = function (knex) {
  return knex('service_provider_pairs').insert(serviceProviderPairs);
};
