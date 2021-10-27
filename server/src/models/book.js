"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "books", modelName: "Book" };

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.User, { foreignKey: "user_id" });
      Book.hasMany(models.BookComments, {
        onDelete: "cascade",
        foreignKey: "book_id",
      });
      Book.hasMany(models.BookLikes, {
        onDelete: "cascade",
        foreignKey: "book_id",
      });
      Book.hasMany(models.Recipe, {
        onDelete: "cascade",
        foreignKey: "book_id",
      });
    }
  }
  Book.init(
    {
      user_id: { type: DataTypes.INTEGER, field: 'user_id' },
      views: { type: DataTypes.STRING, field: 'views' },
      title: { type: DataTypes.STRING, field: 'title' },
      author: { type: DataTypes.STRING, field: 'author' },
      likes: { type: DataTypes.STRING, field: 'likes' },
      description: { type: DataTypes.STRING, field: 'description' },
      img: { type: DataTypes.STRING, field: 'img' },
      vegetarian: { type: DataTypes.BOOLEAN, field: 'vegetarian' },
      without_milk: { type: DataTypes.BOOLEAN, field: 'without_milk' },
      without_eggs: { type: DataTypes.BOOLEAN, field: 'without_eggs' },
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
