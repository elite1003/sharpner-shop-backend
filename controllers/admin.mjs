import { updateProductById, deleteProductById } from "../models/products.mjs";

export const postProduct = async (req, res, next) => {
  const { product } = req.body;
  req.user
    .createProduct(product)
    .then((newProduct) => res.status(201).json({ id: newProduct.id }))
    .catch((err) => res.status(400).json({ message: err.message }));
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const isProductDeleted = deleteProductById(productId);
    if (!isProductDeleted) {
      return res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const putProduct = async (req, res, next) => {
  const { productId } = req.params;
  const { newProduct } = req.body;
  try {
    const updatedProduct = await updateProductById(productId, newProduct);
    if (!updatedProduct) {
      return res.status(404).send();
    }
    res.status(200).json({ updatedProduct });
  } catch (error) {
    res.status(400).json({ error });
  }
};
