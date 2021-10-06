import { Router } from "express";

import UserController from "../controllers/UserController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/auth", auth, UserController.check);

export default router;