"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "users", modelName: "User" };

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Report, {
        onDelete: "cascade",
        foreignKey: "user_id",
      });
      User.hasOne(models.Basket, {
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
