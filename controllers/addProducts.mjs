import path from "path";
import rootDir from "../utils/root-dir.mjs";
import Product from "../models/products.mjs";

export const getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};
export const postAddProduct = (req, res, next) => {
  const p1 = new Product(req.body["product-name"]);
  p1.saveProduct(() => {
    res.redirect("/");
  });
};
export const getProducts = (req, res, next) => {
  Product.fetchAllProducts().then((res) => console.log(res));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
