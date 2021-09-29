import { Router } from "express";
import { readFile } from 'fs/promises';

const json = JSON.parse(await readFile(new URL('../data/books.json', import.meta.url)));

const router = Router();

router.get("/", (req, res) => {
  return res.send(json);
});

export default router;
