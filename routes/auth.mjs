import express from "express";
import { postLogin, postSignUp } from "../controllers/auth.mjs";
const router = express.Router();
router.post("/signup", postSignUp);
router.post("/login", postLogin);
export default router;
