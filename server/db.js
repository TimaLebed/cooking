import config from "config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  config.get("DATA_BASE.NAME"),
  config.get("DATA_BASE.USER"),
  config.get("DATA_BASE.PASSWORD"),
  {
    dialect: "postgres",
    protocol: "postgres",
    host: config.get("DATA_BASE.HOST"),
    port: config.get("DATA_BASE.PORT"),
  }
);

export default db;
