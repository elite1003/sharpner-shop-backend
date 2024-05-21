import express from "express";
import {
  getSendMessageForm,
  getMessages,
  postMessages,
} from "../controllers/message.mjs";

const router = express.Router();

router.get("/", getSendMessageForm);
router.get("/message", getMessages);
router.post("/message", postMessages);

export default router;
