'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Books.init({
    views: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    likes: DataTypes.STRING,
    comments: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};