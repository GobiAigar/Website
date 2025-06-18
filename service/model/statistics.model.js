import { DataTypes } from "sequelize";

export const createstatisticsModel = async (sequelize) => {
  const Statistics = sequelize.define("statistics", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

  return Statistics;
};
