import fs from "fs/promises";

class Message {
  constructor(userName, message) {
    this.userName = userName;
    this.message = message;
  }
  static async getMessages() {
    return fs
      .readFile("messages.json", "utf-8")
      .then((res) => {
        return JSON.parse(res);
      })
      .catch((err) => {
        return [];
      });
  }
  saveMessages(cb) {
    let messages = [];
    fs.readFile("messages.json", "utf-8")
      .then((res) => {
        messages = JSON.parse(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        messages.push(this);
        fs.writeFile("messages.json", JSON.stringify(messages))
          .then(() => {
            cb(null);
          })
          .catch(cb);
      });
  }
}

export default Message;
