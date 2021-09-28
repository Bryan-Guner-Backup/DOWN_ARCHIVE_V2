// prettier-ignore
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("payments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("payments").insert([
        {payment_type: "cash",payment_amount: 1000,payment_date: "2020-02-11",reference_number: 1,payment_category: "rent",lease_id: 1
        },
        {payment_type: "cash",payment_amount: 1000,payment_date: "2020-02-11",reference_number: 2,payment_category: "rent",lease_id: 2
        }
      ]);
    });
};
