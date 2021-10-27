"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "recipes", modelName: "Recipe" };

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.BasketRecipe, { foreignKey: "recipe_id" });
      Recipe.hasMany(models.Report, {
        onDelete: "cascade",
        foreignKey: "recipe_id",
      });
    }
  }
  Recipe.init(
    {
      views: { type: DataTypes.STRING, field: 'views' },
      title: { type: DataTypes.STRING, field: 'title' },
      author: { type: DataTypes.STRING, field: 'author' },
      likes: { type: DataTypes.STRING, field: 'likes' },
      description: { type: DataTypes.STRING, field: 'description' },
      img: { type: DataTypes.STRING, field: 'img' },
      directions: { type: DataTypes.ARRAY, field: 'directions' },
      ingredients: { type: DataTypes.ARRAY, field: 'ingredients' },
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
