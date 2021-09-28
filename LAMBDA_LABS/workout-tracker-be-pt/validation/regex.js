const email = /^\S+@\S+\.\S+$/
const checkDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
const checkTime = /^(\d{1,2})?([MmHh])/
const checkValidTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/

module.exports = {
    email,
    checkDate,
    checkTime,
    checkValidTime
};