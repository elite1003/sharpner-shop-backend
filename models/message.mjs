import fs from "fs/promises";

class Message {
  static getMessages(cb) {
    try {
      (async () => {
        const data = await fs.readFile("message.txt", "utf-8");
        cb(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }
  static saveMessages(data, cb) {
    const message = `${data.userName}: ${data.message} \n`;
    try {
      (async () => {
        await fs.appendFile("message.txt", message);
        cb(null);
      })();
    } catch (error) {
      cb(error);
    }
  }
}

export default Message;
