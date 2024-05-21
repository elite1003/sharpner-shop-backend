import path from "path";
import rootDir from "../utils/root-dir.mjs";
import fs from "fs/promises";

export const getSendMessageForm = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "send-message.html"));
};

export const getMessages = (req, res, next) => {
  try {
    (async () => {
      const data = await fs.readFile("message.txt", "utf-8");
      res.status(200).send(JSON.stringify(data));
    })();
  } catch (error) {
    console.log(error);
  }
};

export const postMessages = (req, res, next) => {
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
};
