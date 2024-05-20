import path from "path";
import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.mjs";
import shopRoutes from "./routes/shop.mjs";
import loginRoutes from "./routes/login.mjs";
import messageRoutes from "./routes/message.mjs";
import rootDir from "./utils/root-dir.mjs";

const app = express();
app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/admin", adminRoutes);
app.use("/login", loginRoutes);
app.use("/shop", shopRoutes);
app.use("/", messageRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "page-not-found.html"));
});
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
