"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "book-comments", modelName: "BookComments" };

module.exports = (sequelize, DataTypes) => {
  class BookComments extends Model {
    static associate(models) {
      BookComments.belongsTo(models.User, { foreignKey: "user_id" });
      BookComments.belongsTo(models.Book, { foreignKey: "book_id" });
    }
  }
  BookComments.init(
    {
      book_id: { type: DataTypes.INTEGER, field: 'book_id' },
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
  return BookComments;
};
