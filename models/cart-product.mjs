import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.mjs";
import Cart from "./cart.mjs";
import Product from "./products.mjs";

// CartProduct join table for many-to-many relationship
class CartProduct extends Model {}
CartProduct.init(
  {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  {
    sequelize,
    modelName: "CartProduct",
    timestamps: false,
  }
);

export default CartProduct;
