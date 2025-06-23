import { Sequelize } from "sequelize";
import {
  createCerficateModel,
  createCompanyModel,
  createFAQModel,
  createMessageModel,
  createNewsModel,
  createProductModel,
  createstatisticsModel,
  createUserModel,
  createWebsiteModel,
  createPageHeaderModel,
} from "../model/index.js";

const sequelize = new Sequelize("aigar", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

let CompanyModel = null;
let FAQModel = null;
let MessageModel = null;
let NewsModel = null;
let ProductModel = null;
let StatisticModel = null;
let SustainAbilityModel = null;
let UserModel = null;
let WebsiteModel = null;
let PageHeader = null;

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    CompanyModel = await createCompanyModel(sequelize);
    FAQModel = await createFAQModel(sequelize);
    MessageModel = await createMessageModel(sequelize);
    NewsModel = await createNewsModel(sequelize);
    PageHeader = await createPageHeaderModel(sequelize);
    ProductModel = await createProductModel(sequelize);
    StatisticModel = await createstatisticsModel(sequelize);
    SustainAbilityModel = await createCerficateModel(sequelize);
    UserModel = await createUserModel(sequelize);
    WebsiteModel = await createWebsiteModel(sequelize);

    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export {
  connection,
  CompanyModel,
  FAQModel,
  MessageModel,
  NewsModel,
  ProductModel,
  StatisticModel,
  SustainAbilityModel,
  UserModel,
  WebsiteModel,
  PageHeader,
};
