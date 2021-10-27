"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "basket", modelName: "Basket" };

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      Basket.belongsTo(models.User, { foreignKey: "user_id" });
      Basket.hasMany(models.BasketBook, {
        onDelete: "cascade",
        foreignKey: "basket_id",
      });
      Basket.hasMany(models.BasketRecipe, {
        onDelete: "cascade",
        foreignKey: "basket_id",
      });
    }
  }
  Basket.init(
    {
      user_id: { type: DataTypes.INTEGER, field: "user_id" },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return Basket;
};
