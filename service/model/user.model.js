import { DataTypes } from "sequelize";

export const createUserModel = async (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    register_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return User;
};
