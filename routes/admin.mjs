import express from "express";
import {
  postProduct,
  deleteProduct,
  putProduct,
} from "../controllers/admin.mjs";

const router = express.Router();

router.post("/product", postProduct);
router.delete("/product/:productId", deleteProduct);
router.put("/product/:productId", putProduct);

export default router;
