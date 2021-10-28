import { Router } from "express";

import RecipeController from "../controllers/RecipeController.js"

const router = Router();

router.get("/", RecipeController.getAllRecipes);

export default router;