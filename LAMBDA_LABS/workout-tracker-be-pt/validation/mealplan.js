const { checkDate, checkTime } = require('./regex');
const ifEmpty = require('./checkForEmpty');

module.exports = function checkRegistrationFields(mealplan) {
    //catches errors
    let error = {};

    let data = {
        ...mealplan
    }

    data.mealplan_title = ifEmpty(data.meal_category) ? data.meal_category : "";

    if (data.food_name = "")
        error.food_name = "A food name is required";

    return {
        error,
        isValid: ifEmpty(error)
    };
};