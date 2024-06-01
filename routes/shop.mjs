import express from "express";
import { getProducts } from "../controllers/shop.mjs";
import { postCart, getCart } from "../controllers/cart.mjs";

const router = express.Router();

router.get("/products", getProducts);
router.post("/cart", postCart);
router.get("/cart", getCart);

//cart
//checkout

export default router;
