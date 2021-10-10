import Book from "../models/books.js";
import ApiError from "../error/ApiError.js";

class BookController {
  async get(req, res) {}

  async create(req, res) {
    try {
      const { name } = req.body;
      const type = await Book.create({ name });

      return res.json({ type });
    } catch (error) {
      console.log(error)
    }
  }
}

export default new BookController();
