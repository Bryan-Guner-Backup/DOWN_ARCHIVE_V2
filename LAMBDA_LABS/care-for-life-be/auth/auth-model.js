const db = require('../data/db-config.js');

module.exports = {
    login
};

function login(email) {
    return db('worker').where({ email })
}
