import http from "http";
import requestHandler from "./routes.mjs";

const server = http.createServer();
server.on("request", requestHandler);
server.listen(4000, () => {
  console.log("Server running on port 4000");
});
