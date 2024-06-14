import express from "express";
import { getProducts } from "../controllers/shop.mjs";
import {
  postCart,
  getCart,
  deleteProductFromCart,
} from "../controllers/cart.mjs";

const router = express.Router();

router.get("/products", getProducts);

//cart
router.post("/cart", postCart);
router.get("/cart", getCart);
router.delete("/cart/:productId", deleteProductFromCart);
//checkout

export default router;
