const db = require('../../database/connection');
const {getNumberOfLikes} = require('./likeModel');
//1 workout, 2 routine, 3 diet, 4 mealplan, 5 comment
const types = {
    WORKOUT: 1,
    ROUTINE: 2,
    DIET: 3,
    MEALPLAN: 4,
    COMMENT: 5
}

async function getPublic(){
    const list = [];
    await Promise.all((await db('entity').orderBy('entity.created_at', 'desc')).map(async entity =>{
        let [user] = await db('users').where('id', '=', entity.user_id).select('users.id', 'users.username', 'users.image');
        let likes = await getNumberOfLikes(entity.id);
        switch(entity.type){
            case types.WORKOUT: 
                    let [workout] = await db('workouts').where('workouts.entity_id', '=', entity.id).where('workouts.workout_share', '=', true);
                    if(workout === null || workout === undefined){
                        return;
                    }else{
                        workout = {...workout, type: types.WORKOUT, user: user, likes: likes}
                        list.push(workout);
                    }
                break;
            case types.ROUTINE: 
                    let [routine] = await db('routines').where('routines.entity_id', '=', entity.id).where('routines.shareable', '=', true);
                    if(routine === null || routine === undefined){
                        return;
                    }else{
                        routine = {...routine, type: types.ROUTINE, user: user, likes: likes}
                        list.push(routine);
                    }
                break;
            case types.DIET: 
                    let [diet] = await db('diets').where('diets.entity_id', '=', entity.id).where('diets.shareable', '=', true);
                    if(diet === null || diet === undefined){
                        return;
                    }else{
                        diet = {...diet, type: types.DIET, user: user, likes: likes} 
                        list.push(diet);
                    }
                break;
            case types.MEALPLAN: 
                    let [mealplan] = await db('mealplans').where('mealplans.entity_id', '=', entity.id).where('mealplans.shareable', '=', true);
                    if(mealplan === null || mealplan === undefined){
                        return;
                    }else{
                        mealplan = {...mealplan, type: types.MEALPLAN, user: user, likes: likes}
                        list.push(mealplan);
                    }
                    
                break;
            case types.COMMENT:

                break;
            default:
                    throw new Error('Problem with entity db')
                break;
        }
    }))

    return list;
}

async function getEntityById(entity_id){
    let list;

    let [entity] = await db('entity').where('id', '=', entity_id)
    let [user] = await db('users').where('id', '=', entity.user_id).select('users.id', 'users.username', 'users.image');
    switch(entity.type){
        case types.WORKOUT: 
                let [workout] = await db('workouts').where('workouts.entity_id', '=', entity.id).where('workouts.workout_share', '=', true);
                workout = {...workout, type: types.WORKOUT, user: user}
                list = workout
            break;
        case types.ROUTINE: 
                let [routine] = await db('routines').where('routines.entity_id', '=', entity.id).where('routines.shareable', '=', true);
                routine = {...routine, type: types.ROUTINE, user: user}
                list = routine
            break;
        case types.DIET: 
                let [diet] = await db('diets').where('diets.entity_id', '=', entity.id).where('diets.shareable', '=', true);
                diet = {...diet, type: types.DIET, user: user} 
                list = diet;
            break;
        case types.MEALPLAN: 
                let [mealplan] = await db('mealplans').where('mealplans.entity_id', '=', entity.id).where('mealplans.shareable', '=', true);
                mealplan = {...mealplan, type: types.MEALPLAN, user: user}
                list = mealplan
            break;
        case types.COMMENT:
                let [comment] = await db('comments').where('comments.this_entity_id', '=', entity.id);
                comment = {...comment, type: types.COMMENT, user: user}
                list = comment
            break;
        default:
            throw new Error('Problem with entity db')
    }

    return list;
}

async function getUserByEntityId(entity_id){
    let [entity] = await db('entity').where('id', '=', entity_id)
    let [user] = await db('users').where('id', '=', entity.user_id).select('users.id', 'users.username', 'users.image');

    return user;
}


module.exports = {
  getPublic,
  getEntityById,
  getUserByEntityId
};
