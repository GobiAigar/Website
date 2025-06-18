import { Sequelize } from "sequelize";
import {
  createFAQModel,
  createNewsModel,
  createUserModel,
  createWebsiteModel,
} from "../model";

const sequelize = new Sequelize("aigar", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

let UserModel = null;
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    UserModel = await createUserModel(sequelize);
    NewsModel = await createNewsModel(sequelize);
    WebsiteModel = await createWebsiteModel(sequelize);
    createFAQModel = await createFAQModel(sequelize);

    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection, UserModel };
