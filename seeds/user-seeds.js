const { User } = require('../models');

const userData = [
  {
    name: 'Tyler',
    email: 'tyler@email.com',
    password: 'password1'
  },
  {
    name: 'Mike',
    email: 'mike@email.com',
    password: 'password1'
  },
  {
    name: 'Ian',
    email: 'ian@email.com',
    password: 'password1'
  },
  {
    name: 'Steve',
    email: 'steve@email.com',
    password: 'password1'
  },
  {
    name: 'Ed',
    email: 'ed@email.com',
    password: 'password1'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
