import express from "express";
import { postAddProduct } from "../controllers/admin.mjs";

const router = express.Router();

router.post("/add-product", postAddProduct);
router.delete("/product/:productId");
router.put("/product/:productId");
export default router;
