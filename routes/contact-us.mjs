import express from "express";
import path from "path";
import rootDir from "../utils/root-dir.mjs";
const router = express.Router();
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});
router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

export default router;
