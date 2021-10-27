"use strict";
const { Model } = require("sequelize");

let tableModel = { schema: "app", tableName: "reports", modelName: "Report" };

module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    static associate(models) {
      Report.belongsTo(models.User, { foreignKey: "user_id" });
      Report.belongsTo(models.Book, { foreignKey: "book_id" });
      Report.belongsTo(models.Recipe, { foreignKey: "recipe_id" });
    }
  }
  Report.init(
    {
      user_id: { type: DataTypes.INTEGER, field: 'user_id' },
      recipe_id: { type: DataTypes.INTEGER, field: 'recipe_id' },
      book_id: { type: DataTypes.INTEGER, field: 'book_id' },
      book_is_like: { type: DataTypes.BOOLEAN, field: 'book_is_like' },
      recipe_is_like: { type: DataTypes.BOOLEAN, field: 'recipe_is_like' },
      comment_book: { type: DataTypes.STRING, field: 'comment_book' },
      comment_recipe: { type: DataTypes.STRING, field: 'comment_recipe' },
    },
    {
      sequelize,
      schema: tableModel["schema"],
      tableName: tableModel["tableName"],
      modelName: tableModel["modelName"],
      timestamps: false,
    }
  );
  return Report;
};
