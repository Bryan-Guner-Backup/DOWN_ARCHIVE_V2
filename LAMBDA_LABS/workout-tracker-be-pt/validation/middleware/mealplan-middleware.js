const mealplanRegistration = require('../mealplan');

module.exports = (req, res, next) =>{
    const mealplan = req.body
    const { error, isValid } = mealplanRegistration(mealplan);

    //return 400 error if entries are invalid
    if(isValid){
        res.status(400).json(error);
    } else {
        next();
    }
}