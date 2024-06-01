import Product from "../models/products.mjs";

export const postAddProduct = async (req, res, next) => {
  const { productName, imageURL, description, price } = req.body;
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
