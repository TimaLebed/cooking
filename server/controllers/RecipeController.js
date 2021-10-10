import Models from "../models/index.js";

const { Recipes } = Models;
class RecipeController {
  async getAllRecipes(req, res) {
    const recipes = await Recipes.findAll();

    return res.json(recipes);
  }
}

export default new RecipeController();
