import { DataTypes } from "sequelize";

export const createFAQModel = async (sequelize) => {
  const FAQ = sequelize.define("FAQ", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    enquestion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mnquestion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    enanswer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mnanswer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return FAQ;
};
