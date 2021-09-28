const dietRegistration = require('../diet');

module.exports = (req, res, next) =>{
    const diet = req.body
    const { error, isValid } = dietRegistration(diet);

    //return 400 error if entries are invalid
    if(isValid){
        res.status(400).json(error);
    } else {
        next();
    }
}