import Models from "../models/index.js";

const { Recipe } = Models;

class RecipeController {
  async getAllRecipes(req, res) {
    const recipe = await Recipe.findAll();

    return res.json(recipe);
  }
}

export default new RecipeController();
