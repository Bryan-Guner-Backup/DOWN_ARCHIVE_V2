const db = require("../data/dbconfig");

// this function will add the newly registered user to the database (their okta_uid)
// and will add all levels to their account via a transaction
module.exports = {
  addUser(oktaUID) {
    return db.transaction((trx) => {
      return db("users")
        .transacting(trx)
        .insert({ okta_uid: oktaUID })
        .then((res) => {
          return db("levels")
            .transacting(trx)
            .then((res) => {
              let promises = [];
              for (let i = 0; i < res.length; i++) {
                promises.push(
                  db("user_levels")
                    .transacting(trx)
                    .insert({ okta_uid: oktaUID, level_id: res[i].id })
                );
              }
              return Promise.all(promises);
            });
        })
        .then(trx.commit)
        .catch(trx.rollback);
    });
  },
  findByOktaUID(okta_uid) {
    return db("users").where("okta_uid", "=", okta_uid);
  },
};
