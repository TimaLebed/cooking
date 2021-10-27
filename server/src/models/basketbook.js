"use strict";
const { Model } = require("sequelize");

let tableModel = {
  schema: "app",
  tableName: "basket-books",
  modelName: "BasketBook",
};

module.exports = (sequelize, DataTypes) => {
  class BasketBook extends Model {
    static associate(models) {
      BasketBook.belongsTo(models.Basket, { foreignKey: "basket_id" });
      BasketBook.hasOne(models.Book, {
        onDelete: "cascade",
        foreignKey: "book_id",
      });
    }
  }
  BasketBook.init(
    {
      basket_id: { type: DataTypes.INTEGER, field: "basket_id" },
      book_id: { type: DataTypes.INTEGER, field: "book_id" },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return BasketBook;
};
