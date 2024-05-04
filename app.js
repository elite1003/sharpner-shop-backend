const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end();
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
  console.log("Name: Sudhir");
});
