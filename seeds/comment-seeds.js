const { Comment } = require('../models');

const commentData = [
  {
    opinion: 'rock music',
  },
  {
    opinion: 'pop music',
  },
  {
    opinion: 'blue',
  },
  {
    opinion: 'red',
  },
  {
    opinion: 'green',
  },
  {
    opinion: 'white',
  },
  {
    opinion: 'gold',
  },
  {
    opinion: 'pop culture',
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
