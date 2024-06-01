import express from "express";
import { postContactUs } from "../controllers/contactUs.mjs";

const router = express.Router();

router.post("/", postContactUs);

export default router;
