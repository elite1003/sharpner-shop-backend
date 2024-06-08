import Product, {
  updateProductById,
  deleteProductById,
} from "../models/products.mjs";

export const postProduct = async (req, res, next) => {
  const { productName, imageURL, description, price } = req.body.product;
  try {
    const newProduct = new Product({
      productName,
      imageURL,
      description,
      price,
    });
    await newProduct.save();
    res.status(201).json({ _id: newProduct._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = deleteProductById(productId);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
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
    res.status(400).json({ message: error.message });
  }
};
