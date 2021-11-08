import { v4 as uuidv4 } from "uuid";
import * as path from "path";

import ApiError from "../error/ApiError.js";
import Models from "../models/index.js";

const { Book } = Models;

class BookController {
  async getAllBooks(req, res) {
    const book = await Book.findAll();

    return res.json(book);
  }

  async create(req, res) {
    try {
      const { user_id, title, description } = req.body;
      const { img } = req.files;

      let fileName = uuidv4() + ".png";

      img.mv(
        path.resolve(path.resolve(path.dirname("")), "", "src/static", fileName)
      );

      const book = await Book.create({
        user_id,
        title,
        description,
        img: fileName,
        views: "",
      });

      return res.json(book);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BookController();
