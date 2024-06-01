import express from "express";
import { getMessages, postMessages } from "../controllers/message.mjs";

const router = express.Router();

router.get("/", getMessages);
router.post("/", postMessages);

export default router;
