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

// Function to get cart with products
export const getCartWithProducts = async (cartId) => {
  try {
    const cart = await Cart.findByPk(cartId, {
      include: {
        model: Product,
        through: {
          model: CartProduct,
          attributes: ["quantity"],
        },
      },
    });
    return cart;
  } catch (error) {
    console.error("Error fetching cart with products:", error);
    throw error;
  }
};

// Function to update a product quantity in cart by ID
export const updateProductInCart = async (cartId, productId, quantity) => {
  try {
    const cartProduct = await CartProduct.findOne({
      where: {
        cartId,
        productId,
      },
    });

    if (cartProduct) {
      cartProduct.quantity = quantity;
      await cartProduct.save();
    } else {
      await CartProduct.create({
        cartId,
        productId,
        quantity,
      });
    }
  } catch (error) {
    console.error("Error updating product in cart:", error);
    throw error;
  }
};

// Function to delete a product from cart by ID
export const deleteProductFromCart = async (cartId, productId) => {
  try {
    await CartProduct.destroy({
      where: {
        cartId,
        productId,
      },
    });
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    throw error;
  }
};
