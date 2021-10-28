import { HttpClient } from "./HttpClient";

class BookApi extends HttpClient {
  constructor() {
    super("http://localhost:5000/api");
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new BookApi();
    }

    return this.classInstance;
  }

  getBooks() {
    return this.instance.get("/books");
  }
}

export default BookApi.getInstance();
