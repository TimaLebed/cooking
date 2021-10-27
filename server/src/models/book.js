"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "books", modelName: "Book" };

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.BasketBook, { foreignKey: "book_id" });
      Book.hasMany(models.Report, {
        onDelete: "cascade",
        foreignKey: "book_id",
      });
    }
  }
  Book.init(
    {
      views: { type: DataTypes.STRING, field: 'views' },
      title: { type: DataTypes.STRING, field: 'title' },
      author: { type: DataTypes.STRING, field: 'author' },
      likes: { type: DataTypes.STRING, field: 'likes' },
      description: { type: DataTypes.STRING, field: 'description' },
      img: { type: DataTypes.STRING, field: 'img' },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return Book;
};
