import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../utils/database.mjs";

class User extends Model {
  static async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate: async (user) => {
        user.password = await User.hashPassword(user.password);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          user.password = await User.hashPassword(user.password);
        }
      },
    },
  }
);

export default User;
