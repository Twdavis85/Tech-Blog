const { Post } = require('../models');

const postData = [
  {
    title: 'Tyler',
    text: 'tyler@text.com',
    user_id: 2
  },
  {
    title: 'Mike',
    text: 'mike@text.com',
    user_id: 3
  },
  {
    title: 'Ian',
    text: 'ian@text.com',
    user_id: 5
  },
  {
    title: 'Steve',
    text: 'steve@text.com',
    user_id: 1
  },
  {
    title: 'Ed',
    text: 'ed@text.com',
    user_id: 4
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
