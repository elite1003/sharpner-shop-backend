import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.mjs";
import Order from "./order.mjs";
import Product from "./products.mjs";

// OrderProduct join table for many-to-many relationship
class OrderProduct extends Model {}
OrderProduct.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
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
    modelName: "OrderProduct",
    timestamps: false,
  }
);

export default OrderProduct;
