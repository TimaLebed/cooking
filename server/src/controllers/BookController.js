import ApiError from "../error/ApiError.js";
import Models from "../models/index.js";

const { Books } = Models;

class BookController {
  async getAllBooks(req, res) {
    const books = await Books.findAll();

    return res.json(books);
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
