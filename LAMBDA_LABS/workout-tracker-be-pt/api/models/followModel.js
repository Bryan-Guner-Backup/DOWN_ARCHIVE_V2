const db = require('../../database/connection');

async function add(follower_id, user_id){
    const [id] = await db('following').insert({ user_id: user_id, follower_id: follower_id}, 'id')

    return db('following').where('following.id', '=', id);
}

function remove(follower_id, user_id){
    return db('following').where('user_id', '=', user_id).where('follower_id', '=', follower_id).del();
}

function getFollowing(user_id){
    return db('following').where('user_id', '=', user_id);
}

function getNumberOfFollowing(user_id){
    return db('following').where('user_id', '=', user_id).count()
}

function getFollowers(user_id){
    return db('following').where('follower_id', '=', user_id);
}

function getNumberOfFollowers(user_id){
    return db('following').where('follower_id', '=', user_id).count()
}


module.exports = {
    add,
    remove,
    getFollowing,
    getNumberOfFollowing,
    getFollowers,
    getNumberOfFollowers
}