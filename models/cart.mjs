import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.mjs";
import User from "./user.mjs";
import Product from "./products.mjs";

//one to one relation between cart and user
class Cart extends Model {}
Cart.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Cart",
  }
);

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
  }
);

// Associations
User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: "userId" });

Cart.belongsToMany(Product, { through: CartProduct, foreignKey: "cartId" });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: "productId" });

export { Cart, CartProduct };

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
