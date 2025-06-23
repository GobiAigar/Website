import { DataTypes } from "sequelize";

export const createNewsModel = async (sequelize) => {
  const News = sequelize.define("News", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    entitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mntitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mndescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    enjournalist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mnjournalist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  return News;
};
