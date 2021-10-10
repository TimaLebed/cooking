import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";

import ApiError from "../error/ApiError.js";
import Models from "../models/index.js";

const { Users } = Models;

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, config.get("SECRET_KEY"), {
    expiresIn: "24h",
  });
};

class UserController {
  async signup(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.failRequest("Некорректный email или password!"));
    }

    const candidate = await Users.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.failRequest("Пользователь с email уже существует!"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await Users.create({ email, role, password: hashPassword });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.internal("Пользователь с email не найден"));
    }

    let comparePassword = bcrypt.compare(password, user.password);

    if (!comparePassword) {
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
