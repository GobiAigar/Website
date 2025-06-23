import { DataTypes } from "sequelize";

export const createCerficateModel = async (sequelize) => {
  const Certificate = sequelize.define("Certificate", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Certificate;
};
