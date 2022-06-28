import { Sequelize } from "sequelize";
const env = require("dotenv").config();

export const sequelizeConnect = new Sequelize(
  process.env.MYSQL_DB ?? "database",
  process.env.MYSQL_USER! ?? "root",
  process.env.MYSQL_PASSWORD ?? "",
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);
