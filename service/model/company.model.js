import { DataTypes } from "sequelize";

export const createCompanyModel = async (sequelize) => {
  const Company = sequelize.define("Company", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    english: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mongolia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Company;
};
