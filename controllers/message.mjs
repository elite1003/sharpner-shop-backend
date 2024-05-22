import path from "path";
import rootDir from "../utils/root-dir.mjs";
import Message from "../models/message.mjs";

export const getSendMessageForm = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "send-message.html"));
};

export const getMessages = (req, res, next) => {
  Message.getMessages((messages) =>
    res.status(200).send(JSON.stringify(messages))
  );
};

export const postMessages = (req, res, next) => {
  Message.saveMessages(req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send({
        ok: true,
      });
    }
  });
};
