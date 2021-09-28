// prettier-ignore
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("leaseterms")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("leaseterms").insert([
        {payment_due_date: "2020-02-11",lease_start_date: "2020-02-11",lease_end_date: "2021-02-11",lease_term: "12",monthly_rent: 1000,security_deposit: 2000
        },
        {payment_due_date: "2020-02-11",lease_start_date: "2020-02-11",lease_end_date: "2021-02-11",lease_term: "6",monthly_rent: 2000,security_deposit: 3000
        }
      ]);
    });
};
