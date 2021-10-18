'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recipes.init({
    views: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    likes: DataTypes.STRING,
    comments: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    directions: DataTypes.ARRAY(DataTypes.STRING),
    ingredients: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Recipes',
  });
  return Recipes;
};