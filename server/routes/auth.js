import { Router } from "express";
// import User from "../User.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExisted = await User.findOne({ email });

    if (isExisted) {
      return res.status(300).json({ message: "Email exists, try another" });
    }

    const user = new User({ email, password });

    await user.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
