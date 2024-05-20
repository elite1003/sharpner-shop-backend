import express from "express";
import path from "path";
import rootDir from "../utils/root-dir.mjs";
import fs from "fs/promises";

const router = express.Router();
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "send-message.html"));
});
router.get("/message", (req, res, next) => {
  try {
    (async () => {
      const data = await fs.readFile("message.txt", "utf-8");
      res.status(200).send(JSON.stringify(data));
    })();
  } catch (error) {
    console.log(error);
  }
});
router.post("/message", (req, res, next) => {
  const message = `${req.body.userName}: ${req.body.message} \n`;
  try {
    (async () => {
      await fs.appendFile("message.txt", message);
      res.status(200).send({
        ok: true,
      });
    })();
  } catch (error) {
    console.log(error);
  }
});
export default router;
