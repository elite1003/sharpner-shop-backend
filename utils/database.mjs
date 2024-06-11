import { Sequelize } from "sequelize";

const sequelize = new Sequelize("e-commerce", "root", "Root1234@", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
