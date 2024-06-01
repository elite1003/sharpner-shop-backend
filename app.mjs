import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.mjs";
import shopRoutes from "./routes/shop.mjs";
import messageRoutes from "./routes/message.mjs";
import contactUsRoutes from "./routes/contact-us.mjs";
import authRoutes from "./routes/auth.mjs";
import { error404 } from "./controllers/error.mjs";
import rootDir from "./utils/root-dir.mjs";
import dotenv from "dotenv";
import { verifyToken } from "./utils/jwt.mjs";
dotenv.config();
const app = express();
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/admin", verifyToken, adminRoutes);
app.use("/contact-us", contactUsRoutes);
app.use("/message", messageRoutes);
app.use("/shop", verifyToken, shopRoutes);
app.use("/auth", authRoutes);

app.use(error404);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
