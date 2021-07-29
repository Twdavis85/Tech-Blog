const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
{
    opinion: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize
}
);

module.exports = Comment;

