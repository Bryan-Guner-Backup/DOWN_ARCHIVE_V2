// prettier-ignore
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("workorders")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("workorders").insert([
        {work_order_type: "repair",work_order_date: "2020-02-11",start_date: "2020-02-12",completion_date: "2020-02-14",priority: "high",problem_description: "poo everywhere",permission_to_enter: "yes",vendor: "poop r us",units_id: 1
        }
      ]);
    });
};
