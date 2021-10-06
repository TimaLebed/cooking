import { Router } from "express";
// import { readFile } from 'fs/promises';

import BookController from "../controllers/BookController.js"
import checkRole from "../middleware/checkRole.js";

// const json = JSON.parse(await readFile(new URL('../data/books.json', import.meta.url)));
// router.get("/", (req, res) => {
//   return res.send(json);
// });

const router = Router();

router.post("/",checkRole("ADMIN"), BookController.create);
router.get("/", BookController.get);

export default router;
