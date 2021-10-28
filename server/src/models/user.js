"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "users", modelName: "User" };

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Book, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
      User.hasMany(models.Recipe, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
      User.hasMany(models.BookComments, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
      User.hasMany(models.BookLikes, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
      User.hasMany(models.RecipeComments, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
      User.hasMany(models.RecipeLikes, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING, field: 'email' },
      password: { type: DataTypes.STRING, field: 'password' },
      role: { type: DataTypes.STRING, field: 'role' },
      name: { type: DataTypes.STRING, field: 'name' },
      profile_title: { type: DataTypes.STRING, field: 'profile_title' },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return User;
};
