import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";

// import User from "./User.js";
import bookRoutes from "./routes/book.js";
import recipeRoutes from "./routes/recipe.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRoutes);
app.use("/recipes", recipeRoutes);

// app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

const DB_URL = `mongodb+srv://user:user@cluster0.1ozfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use("/login", authRoutes);

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
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

startApp();
