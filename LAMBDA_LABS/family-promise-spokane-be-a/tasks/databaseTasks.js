// this task is scheduled to reset the beds in the database at a given interval

const Beds = require('../api/bedCapacity/bedsModel');
const cron = require('node-cron')

// should probably be saved inside the beds database
const max_beds = 90

// syntax for cron is every 15min from 7-8 am '*/4 7-8 * * *'
const task = cron.schedule('0 0 * * *', function() {
    console.log('getting the count of beds');
    Beds.findAll()
    .then((res) => {
        console.log(res[0].total_beds)
        if (res[0].total_beds !== max_beds) {
            console.log("we don't have the max beds")
            Beds.update({id:1, total_beds: max_beds})
            .then(res => {
                console.log("task updated beds sucessfully")
            })
            .catch(error => {
                console.log("task failed to reset bed counts")
            })
        } 
        else {
            console.log(`we now have ${res[0].total_beds} beds`)
        }
    })
    .catch((error) => {
        console.log(error.message)
    })
  });

module.exports = task