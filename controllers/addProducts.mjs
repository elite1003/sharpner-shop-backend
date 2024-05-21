import path from "path";
import rootDir from "../utils/root-dir.mjs";

const products = [];

export const getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};
export const postAddProduct = (req, res, next) => {
  products.push({ title: req.body["product-name"] });
  res.redirect("/");
};
export const getProducts = (req, res, next) => {
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
