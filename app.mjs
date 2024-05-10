import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.mjs";
import shopRoutes from "./routes/shop.mjs";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
