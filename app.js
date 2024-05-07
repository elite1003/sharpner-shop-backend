const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/home") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome home");
    res.end();
  }
  if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to About Us page");
    res.end();
  }
  if (req.url === "/node") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(" Welcome to my Node Js project");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
