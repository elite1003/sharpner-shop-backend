import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.mjs";

class Product extends Model {}
Product.init(
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Product",
    timestamps: false,
  }
);

// Export the model
export default Product;

// Update a product by ID
export const updateProductById = async (productId, updatedData) => {
  try {
    const [updatedRows] = await Product.update(updatedData, {
      where: { id: productId },
    });
    return updatedRows > 0 ? await Product.findByPk(productId) : null;
  } catch (error) {
    throw error;
  }
};

// Delete a product by ID
export const deleteProductById = async (productId) => {
  try {
    const deletedRows = await Product.destroy({
      where: { id: productId },
    });
    return deletedRows > 0;
  } catch (error) {
    throw error;
  }
};
