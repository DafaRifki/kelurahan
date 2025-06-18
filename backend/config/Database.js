import { Sequelize } from "sequelize";

const db = new Sequelize("kelurahan", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
