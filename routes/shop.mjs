import express from "express";
import { getProducts } from "../controllers/addProducts.mjs";

const router = express.Router();

router.get("/", getProducts);

export default router;
