
exports.seed = function (knex) {
  return knex('role').insert([
    { role: 'supervisor_agriculture' },
    { role: 'supervisor_health' },
    { role: 'supervisor_income_generation' },
    { role: 'teacher' },
    { role: 'field_manager' },
    { role: 'field_officer' }
  ]);
};
