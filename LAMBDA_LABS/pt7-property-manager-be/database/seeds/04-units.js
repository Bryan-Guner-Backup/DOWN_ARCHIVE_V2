// prettier-ignore
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("units")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("units").insert([
        {number: 1,renter_id: 2,lease_id: 1,property_id: 3,manager_id: 1,description:  "State of the art kitchen, will accommodate people with fast metabolism",date_available: "2020-02-11",parking: "No parking",type: "Type 2",cooling: "centralized",heating: "Yes",pets: "Yes",laundry: "Inside unit",fees: 5555.25,sqft: 2000,elementary: "Yes",middle: "Yes",high: "Yes",district: "Yes",
        },
        {number: 1,renter_id: 4,lease_id: 2,property_id: 2,manager_id: 1, description: "5 bedroom terrifying place so relaxing",date_available: "2020-02-11",parking: "2 parking",type: "No type",cooling: "centralized",heating: "Yes",pets: "Yes",laundry: "Inside unit",fees: 5555.0,sqft: 2000,elementary: "Yes",middle: "Yes",high: "Yes",district: "Yes",
        },
      ]);
    });
};
