import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";

import ApiError from "../error/ApiError.js";
import { User, Basket } from "../models/index.js";

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

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.failRequest("Пользователь с email уже существует!"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.internal("Пользователь с email не найден"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);

    if(!comparePassword) {
      return next(ApiError.internal("Неверный пароль"));
    }

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);

    return res.json({ token });
  }
}

export default new UserController();
