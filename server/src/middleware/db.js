import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const db = new Sequelize(
  process.env.DATA_BASE_NAME,
  process.env.DATA_BASE_USER,
  process.env.DATA_BASE_PASSWORD,
  {
    dialect: "postgres",
    protocol: "postgres",
    host: process.env.DATA_BASE_HOST,
    port: process.env.DATA_BASE_PORT,
  }
);

export default db;
