import { Router } from "express";
import { readFile } from 'fs/promises';

import RecipeController from "../controllers/RecipeController.js"

const json = JSON.parse(await readFile(new URL('../data/recipes.json', import.meta.url)));

const router = Router();

// router.get("/", (req, res) => {
//   return res.send(json);
// });

router.get("/recipes", RecipeController.get);

export default router;