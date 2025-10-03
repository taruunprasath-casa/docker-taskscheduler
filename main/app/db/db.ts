import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME ?? "db";
const dbUser = process.env.DB_USER ?? "taruun";
const dbPass = process.env.DB_PASS ?? "123456";
const dbHost = process.env.DB_HOST ?? "postgres";
const dbPort = Number(process.env.DB_PORT ?? "5432");

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost, 
  port: dbPort, 
  dialect: "postgres",
});

