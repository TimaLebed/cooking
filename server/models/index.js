import DataTypes from "sequelize";
import db from "../db.js";

const User = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, uniq: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = db.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Book = db.define("book", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Recipe = db.define("recipe", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(Book);
Book.belongsTo(Basket);

Basket.hasMany(Recipe);
Recipe.belongsTo(Basket);

export { User, Basket, Book, Recipe };
