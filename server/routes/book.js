import { Router } from "express";

import BookController from "../controllers/BookController.js"
import checkRole from "../middleware/checkRole.js";

const router = Router();

router.post("/",checkRole("ADMIN"), BookController.create);
router.get("/", BookController.getAllBooks);

export default router;
