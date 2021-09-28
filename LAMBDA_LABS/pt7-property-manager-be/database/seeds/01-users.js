const bcrypt = require("bcryptjs");
// prettier-ignore
exports.seed = function(knex) {
  return knex("users").del().then(function() {
      return knex("users").insert([
        {email: "fake@fake.com",password: bcrypt.hashSync("user1", 16),phoneNumber: "1234567890",firstName: "Mister",lastName: "Rogers",role: "Manager",img:  "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2014/12/fstoppers-dylan-patrick-setting-up-a-successful-headshot-session-8.jpg"},
        {email: "fake2@fake.com",password: bcrypt.hashSync("user2", 16),phoneNumber: "1345678901",firstName: "Broke",lastName: "Millennial",role: "Renter",img:  "https://michael-schacht.com/wp-content/uploads/2018/11/parkerheadshot.jpg"},
        {email: "sagemjordan@gmail.com",password: bcrypt.hashSync("ilovelambda", 16),phoneNumber: "3176088599",firstName: "Sage",lastName: "Jordan",role: "Manager",img:  "https://pbs.twimg.com/profile_images/1099022806677889024/4wMmFbGr_400x400.jpg"},
        {email: "genericuser@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "61824536281",firstName: "Generic",lastName: "User",role: "Renter",img:  "https://i.pinimg.com/736x/2e/0a/f8/2e0af89dac4dbf2aae5bbca791adb4c6.jpg"},
        {email: "bigbird13@gmail.com",password: bcrypt.hashSync("sesamestreet", 16),firstName: "Big",lastName: "Bird",role: "Renter",img:  "https://www.carmelstudiosphotography.com/wp-content/gallery/professional-headshots/Professional-Headshot-6.jpg"},
        {email: "redd@caleb.com",password: bcrypt.hashSync("password", 16),phoneNumber: "123",firstName: "Renter",lastName: "Redd",role: "Renter",img: null},
        {email: "fakeuser@fake.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1234567890",firstName: "Mister",lastName: "Rogers",role: "Renter",img:  "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2014/12/fstoppers-dylan-patrick-setting-up-a-successful-headshot-session-8.jpg"},
        {email: "cmitchell@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "180033333",firstName: "Carlos",lastName: "fake",role: "Manager",img: null},
        {email: "brave@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "180045555",firstName: "peter ",lastName: "mitchell",role: "Manager",img: null},
        {email: "new@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "222222",firstName: "Carlos",lastName: "Mitchell",role: "Manager",img: null},
        {email: "jack@frost.com",password: bcrypt.hashSync("password", 16),phoneNumber: "123",firstName: "Jack",lastName: "Frost",role: "Manager",img: null},
        {email: "caleb@red.com",password: bcrypt.hashSync("password", 16),phoneNumber: "123",firstName: "renter",lastName: "redd",role: "Renter",img: null},
        {email: "antman@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "4444444444",firstName: "ant",lastName: "man",role: "Manager",img: null},
        {email: "yeah@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1800411PAIN",firstName: "Carlos",lastName: "Mitchell",role: "Manager",img:  "https://vignette.wikia.nocookie.net/mazinger/images/2/26/Koji_Kabuto.png/revision/latest?cb=20190812081130"},
        {email: "Manger10@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1234567890",firstName: "Manager 10",lastName: "Labs PT",role: "Manager",img: null},
        {email: "loki@avengers.com",password: bcrypt.hashSync("password", 16),phoneNumber: "444444444444",firstName: "Carlos",lastName: "Sanchez",role: "Renter",img: null},
        {email: "thor@avengers.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1234567890",firstName: "Thor",lastName: "Odinson",role: "Renter",img: null},
        {email: "bucky@avengers.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1234567890",firstName: "Bucky",lastName: "Barnes",role: "Manager",img: null},
        {email: "capam@avengers.com",password: bcrypt.hashSync("password", 16),phoneNumber: "3334445555",firstName: "Captain",lastName: "America",role: "Renter",img: null},
        {email: "walter@peace.com",password: bcrypt.hashSync("password", 16),phoneNumber: "123",firstName: "Walter",lastName: "Peace",role: "Renter",img: null},
        {email: "kool@aid.net",password: bcrypt.hashSync("password", 16),phoneNumber: "1234567891",firstName: "kool",lastName: "aid",role: "Manager",img: null},
        {email: "joni@tree.com",password: bcrypt.hashSync("password", 16),phoneNumber: "123",firstName: "Joni",lastName: "Tree",role: "Manager",img: null},
        {email: "brandon@craig.com",password: bcrypt.hashSync("password", 16),phoneNumber: "123",firstName: "Brandon",lastName: "Craig",role: "Renter",img: null},
        {email: "carlo.s16@hotmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "2396015295",firstName: "Carlos",lastName: "Sanchez",role: "Manager",img: null},
        {email: "Yeah222@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1800411PAIN",firstName: "Johnny",lastName: "week",role: "Renter",img: null},
        {email: "caleb@redd.com",password: bcrypt.hashSync("password", 16),phoneNumber: "9283028624",firstName: "Caleb",lastName: "Redd",role: "Manager",img: null},
        {email: "toby@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1800411PAIN",firstName: "Carlos",lastName: "Mitchell",role: "Manager",img: null},
        {email: "yeah@yahoo.com",password: bcrypt.hashSync("password", 16),phoneNumber: "9547024279",firstName: "Carlos",lastName: "Mitchell",role: "Renter",img:  "https://insights.ehotelier.com/wp-content/uploads/sites/6/2018/08/Average-Joe.jpg"},
        {email: "fake10@gmail.com",password: bcrypt.hashSync("password", 16),phoneNumber: "1800411PAINS",firstName: "Carlos",lastName: "Mitchell",role: "Renter",img:  "https://insights.ehotelier.com/wp-content/uploads/sites/6/2018/08/Average-Joe.jpg"}
      ]);
    });
};
