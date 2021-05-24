const { User } = require('../models');

const userData = [
    {
        username: "tyrell_wellick",
        email: "tyrell@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "mia_simay",
        email: "mia@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "robert_paulson",
        email: "robertp@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "gon_freecs",
        email: "gon@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "uma_thurman",
        email: "uma@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "tyler_durden",
        email: "tyler@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;