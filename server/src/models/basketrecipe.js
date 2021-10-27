"use strict";
const { Model } = require("sequelize");

let tableModel = {
  schema: "app",
  tableName: "basket-recipes",
  modelName: "BasketRecipe",
};

module.exports = (sequelize, DataTypes) => {
  class BasketRecipe extends Model {
    static associate(models) {
      BasketRecipe.belongsTo(models.Basket, { foreignKey: "basket_id" });
      BasketRecipe.hasOne(models.Recipe, {
        onDelete: "cascade",
        foreignKey: "recipe_id",
      });
    }
  }
  BasketRecipe.init(
    {
      basket_id: { type: DataTypes.INTEGER, field: "basket_id" },
      recipe_id: { type: DataTypes.INTEGER, field: "recipe_id" },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return BasketRecipe;
};
