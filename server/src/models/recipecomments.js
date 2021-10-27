"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "recipe-comments", modelName: "RecipeComments" };

module.exports = (sequelize, DataTypes) => {
  class RecipeComments extends Model {
    static associate(models) {
      RecipeComments.belongsTo(models.User, { foreignKey: "user_id" });
      RecipeComments.belongsTo(models.Recipe, { foreignKey: "recipe_id" });
    }
  }
  RecipeComments.init(
    {
      recipe_id: { type: DataTypes.INTEGER, field: 'recipe_id' },
      user_id: { type: DataTypes.INTEGER, field: 'user_id' },
      comment: { type: DataTypes.STRING, field: 'comment' },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return RecipeComments;
};
