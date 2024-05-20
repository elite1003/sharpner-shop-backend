import express from "express";
import path from "path";
import rootDir from "../utils/root-dir.mjs";

const router = express.Router();
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login-form.html"));
});

export default router;
