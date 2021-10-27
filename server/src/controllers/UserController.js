import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import ApiError from "../error/ApiError.js";
import Models from "../models/index.js";

dotenv.config();

const { User } = Models;

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async signup(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.failRequest("Некорректный email или password!"));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.failRequest("Пользователь с email уже существует!"));
    }

    const user = await User.create({ email, role, password});
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.internal("Пользователь с email не найден"));
    }

    if (password !== user.password) {
      return next(ApiError.internal("Неверный пароль"));
    }

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async checkAuth(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);

    return res.json({ token });
  }
}

export default new UserController();

// npx sequelize-cli model:generate --name Users --attributes email:string,password:string,role:string,name:string,profile_title:string

// npx sequelize-cli model:generate --name BookComments --attributes book_id:integer,user_id:integer,comment:string
// npx sequelize-cli model:generate --name RecipeComments --attributes recipe_id:integer,user_id:integer,comment:string
// npx sequelize-cli model:generate --name BookLikes --attributes book_id:integer,user_id:integer
// npx sequelize-cli model:generate --name RecipeLikes --attributes recipe_id:integer,user_id:integer

// npx sequelize-cli model:generate --name Basket --attributes user_id:integer

// npx sequelize-cli model:generate --name BasketBooks --attributes basket_id:integer,book_id:integer

// npx sequelize-cli model:generate --name BasketRecipes --attributes basket_id:integer,recipe_id:integer

// npx sequelize-cli model:generate --name Reports --attributes user_id:integer,recipe_id:integer,book_id:integer,book_is_like:boolean,recipe_is_like:boolean,comment_book:string,comment_recipe:string

// npx sequelize-cli model:generate --name Books --attributes views:string,title:string,author:string,likes:string,description:string,img:string

// npx sequelize-cli model:generate --name Recipes --attributes views:string,title:string,author:string,likes:string,description:string,img:string,directions:array,ingredients:array
