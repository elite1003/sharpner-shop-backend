import express from "express";
import { getContactUs, postContactUs } from "../controllers/contactUs.mjs";

const router = express.Router();

router.get("/", getContactUs);
router.post("/", postContactUs);

export default router;
