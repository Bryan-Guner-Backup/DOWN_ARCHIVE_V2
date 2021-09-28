// prettier-ignore
exports.seed = function(knex) {
  return knex("applications")
    .del()
    .then(function() {
      return knex("applications").insert([
        {first_name: "greatest",last_name: "ever",marital_status: "player",email: "dizzy@toronto.org",move_in_date: "2020-06-18",lease_terms: 12,date_of_birth: "1985-02-11",app_address: "18 South Ohio St.",app_city: "Toronto",app_state: "ON",app_zip: "M4B 1B3",app_country: "America Junior",government_id: "132323232",social_security: "111-05-1111",document: "https://www.handsonbanking.org/financial-education/wp-content/uploads/2012/10/bank_statement.png", status: "pending",unit_id: 1},
        {first_name: "Sage",  last_name: "Wonder-Developer",  marital_status: "Engaged!!!!!!",  email: "sageinindiana@gmail.com",  move_in_date: "2020-05-05",  lease_terms: 6,  date_of_birth: "1999-09-09",  app_address: "Ball Python Ct",  app_city: "South Bend",  app_state: "IN",  app_zip: "12345",  app_country: "America",  government_id: "1010101010",  social_security: "000-00-1111",  document: "https://thenypost.files.wordpress.com/2020/03/tiger-king-memes-joe-exotic-2020-neflix.jpg?quality=90&strip=all&w=1236&h=820&crop=1",  status: "approved",  unit_id: 2}
      ]);
    });
};
