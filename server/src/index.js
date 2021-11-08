import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import * as path from 'path';

import db from "./middleware/db.js";
import router from "./routes/index.js";
import ErrorHandler from "./middleware/errorHandling.js";
import * as models from "./models/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.resolve(path.dirname('')), "", "src/static")));
app.use(fileUpload());

app.use("/api", router);

// app.use(ErrorHandler);

async function startApp() {
  try {
    await db.authenticate();
    await db.sync({ force: true });

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

startApp();
