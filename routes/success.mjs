import express from "express";
import { getSuccess } from "../controllers/contactUs.mjs";

const router = express.Router();

router.get("/", getSuccess);

export default router;
