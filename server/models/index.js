import DataTypes from "sequelize";
import db from "../db.js";

const User = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = db.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Book = db.define("book", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  views: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING },
  likes: { type: DataTypes.STRING },
  comments: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
});

const Recipe = db.define("recipe", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(Book);
Book.belongsTo(Basket);

// Basket.hasMany(Recipe);
// Recipe.belongsTo(Basket);

export { User, Basket, Book, Recipe };
