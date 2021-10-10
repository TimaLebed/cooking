import { HttpClient } from "./HttpClient";

class RecipeApi extends HttpClient {
  constructor() {
    super("http://localhost:5000");
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new RecipeApi();
    }

    return this.classInstance;
  }

  getRecipes() {
    return this.instance.get("/recipes");
  }
}

export default RecipeApi.getInstance();
