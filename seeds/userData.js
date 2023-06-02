const { User } = require('../models');

const userData = [
    {
        email: 'spider@email.com',
        username: 'spider',
        password: 'spiderman',
    },
    {
        email: 'spongebob@email.com',
        username: 'spongebob',
        password: 'squarepants',
    },
    {
        email: 'superman@email.com',
        username: 'clark',
        password: 'loislane',
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedUser;