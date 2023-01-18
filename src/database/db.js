import Sequelize from "sequelize";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from "../config.js";


export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  define: {
    timestamps: false,
  },
}
);
