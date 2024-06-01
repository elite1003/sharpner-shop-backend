// import fs from "node:fs/promises";
import mongoose from "mongoose";

// Create the product schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create the product model
const Product = mongoose.model("Product", productSchema);
export default Product;
