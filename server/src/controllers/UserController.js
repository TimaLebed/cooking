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
  async signup(req, res) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Некорректный email или password!" });
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return res
        .status(409)
        .json({ message: "Пользователь с email уже существует!" });
    }

    const user = await User.create({ email, role, password });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(404)
        .send({ message: "Пользователь с email не найден" });
    }

    if (password !== user.password) {
      return res.status(401).send({ message: "Неверный пароль" });
    }

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async checkAuth(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);

    return res.json({ token });
  }
}

export default new UserController();
