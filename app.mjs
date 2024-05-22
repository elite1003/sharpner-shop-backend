import path from "path";
import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.mjs";
import shopRoutes from "./routes/shop.mjs";
import loginRoutes from "./routes/login.mjs";
import messageRoutes from "./routes/message.mjs";
import contactUsRoutes from "./routes/contact-us.mjs";
import successRoutes from "./routes/success.mjs";
import { error404 } from "./controllers/error.mjs";
import rootDir from "./utils/root-dir.mjs";

const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/admin", adminRoutes);
app.use("/login", loginRoutes);
app.use("/contact-us", contactUsRoutes);
app.use("/success", successRoutes);
app.use("/", shopRoutes);
// app.use("/", messageRoutes);

app.use(error404);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
