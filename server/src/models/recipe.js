"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "recipes", modelName: "Recipe" };

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.Book, { foreignKey: "book_id" });
      Recipe.belongsTo(models.User, { foreignKey: "user_id" });
      Recipe.hasMany(models.RecipeComments, {
        onDelete: "cascade",
        foreignKey: "recipe_id",
      });
      Recipe.hasMany(models.RecipeLikes, {
        onDelete: "cascade",
        foreignKey: "recipe_id",
      });
    }
  }
  Recipe.init(
    {
      user_id: { type: DataTypes.INTEGER, field: 'user_id' },
      book_id: { type: DataTypes.INTEGER, field: 'book_id' },
      views: { type: DataTypes.STRING, field: 'views' },
      title: { type: DataTypes.STRING, field: 'title' },
      author: { type: DataTypes.STRING, field: 'author' },
      likes: { type: DataTypes.STRING, field: 'likes' },
      description: { type: DataTypes.STRING, field: 'description' },
      img: { type: DataTypes.STRING, field: 'img' },
      directions: { type: DataTypes.ARRAY(DataTypes.STRING), field: 'directions' },
      ingredients: { type: DataTypes.ARRAY(DataTypes.STRING), field: 'ingredients' },
      minutes: { type: DataTypes.INTEGER, field: 'minutes' },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return Recipe;
};
