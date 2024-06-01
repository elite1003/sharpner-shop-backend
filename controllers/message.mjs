import Message from "../models/message.mjs";

export const getMessages = (req, res, next) => {
  Message.getMessages().then((messages) => res.status(200).json(messages));
};

export const postMessages = (req, res, next) => {
  const message = new Message(req.body.userName, req.body.message);
  message.saveMessages((err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send({
        ok: true,
      });
    }
  });
};
