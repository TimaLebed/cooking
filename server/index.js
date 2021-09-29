import express from "express";
import cors from "cors";

import bookRoutes from "./routes/book.js";
import recipeRoutes from "./routes/recipe.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRoutes);
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
