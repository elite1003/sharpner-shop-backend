import fs from "fs/promises";

function requestHandler(req, res) {
  const { url, method } = req;
  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    (async () => {
      const message = await fs.readFile("messages.txt", "utf8");
      res.write(
        `<pre>${message}</pre><form action = "/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>`
      );
      return res.end();
    })();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunck) => {
      body.push(chunck);
    });
    req.on("end", async () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      const data = await fs.readFile("messages.txt", {
        encoding: "utf8",
      });
      const newData =
        decodeURIComponent(message.replace(/\+/g, "%20")) + "\n" + data;
      await fs.writeFile("messages.txt", newData);
      res.statusCode = 302;
      res.setHeader("Content-Type", "text/html");
      res.setHeader("Location", "/");
      return res.end();
    });
  }
}

export default requestHandler;
