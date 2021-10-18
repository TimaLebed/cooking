import { Router } from "express";

import userRouter from "./user.js";
import bookRouter from "./book.js";
import recipeRouter from "./recipe.js";

const router = Router();

router.use("/user", userRouter);
router.use("/books", bookRouter);
router.use("/recipes", recipeRouter);
router.use("/", (req, res) => res.send('123'))

export default router;
