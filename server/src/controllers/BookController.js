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
      const { name } = req.body;
      const type = await Book.create({ name });

      return res.json({ type });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BookController();
