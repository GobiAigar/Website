import { DataTypes } from "sequelize";

export const createWebsiteModel = async (sequelize) => {
  const Website = sequelize.define("Website", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mntitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mndescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_url2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_url3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_url4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Website;
};
