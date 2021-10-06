import express from "express";
import cors from "cors";
import config from "config";

import db from "./db.js";
import * as models from "./models/index.js";
import router from "./routes/index.js"
import bookRoutes from "./routes/book.js";
import recipeRoutes from "./routes/recipe.js";
import authRoutes from "./routes/auth.js";
import ErrorHandler from "./middleware/errorHandling.js";

const app = express();
const PORT = config.get("PORT") || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
// app.use("/books", bookRoutes);
// app.use("/recipes", recipeRoutes);
// app.use("/login", authRoutes);

app.use(ErrorHandler);

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.create({ email, password });
//     res.json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

async function startApp() {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

startApp();
