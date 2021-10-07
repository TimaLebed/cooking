import express from "express";
import cors from "cors";
import config from "config";

import db from "./db.js";
import router from "./routes/index.js"
import ErrorHandler from "./middleware/errorHandling.js";
import * as models from "./models/index.js";

const app = express();
const PORT = config.get("PORT") || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(ErrorHandler);

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
