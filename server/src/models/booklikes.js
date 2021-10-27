"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "book-likes", modelName: "BookLikes" };

module.exports = (sequelize, DataTypes) => {
  class BookLikes extends Model {
    static associate(models) {
      BookLikes.belongsTo(models.User, { foreignKey: "user_id" });
      BookLikes.belongsTo(models.Book, { foreignKey: "book_id" });
    }
  }
  BookLikes.init(
    {
      book_id: { type: DataTypes.INTEGER, field: 'book_id' },
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
  return BookLikes;
};
