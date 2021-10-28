"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "recipe-likes", modelName: "RecipeLikes" };

module.exports = (sequelize, DataTypes) => {
  class RecipeLikes extends Model {
    static associate(models) {
      RecipeLikes.belongsTo(models.User, { foreignKey: "user_id" });
      RecipeLikes.belongsTo(models.Recipe, { foreignKey: "recipe_id" });
    }
  }
  RecipeLikes.init(
    {
      recipe_id: { type: DataTypes.INTEGER, field: 'recipe_id' },
      user_id: { type: DataTypes.INTEGER, field: 'user_id' },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return RecipeLikes;
};
