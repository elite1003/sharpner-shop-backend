import express from "express";
import path from "path";
import rootDir from "../utils/root-dir.mjs";

const router = express.Router();

export const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body["product-name"] });
  res.redirect("/");
});

export default router;
