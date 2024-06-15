import dotenv from "dotenv";
dotenv.config();
//models
import User from "./models/user.mjs";
import Cart from "./models/cart.mjs";
import Product from "./models/products.mjs";
import CartProduct from "./models/cart-product.mjs";

import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.mjs";
import shopRoutes from "./routes/shop.mjs";
import messageRoutes from "./routes/message.mjs";
import contactUsRoutes from "./routes/contact-us.mjs";
import authRoutes from "./routes/auth.mjs";
import { error404 } from "./controllers/error.mjs";
import rootDir from "./utils/root-dir.mjs";
import { verifyToken } from "./utils/jwt.mjs";
import sequelize from "./utils/database.mjs";
import Order from "./models/order.mjs";
import OrderProduct from "./models/order-product.mjs";

const app = express();

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

//associations

User.hasMany(Product, { foreignKey: "userId" });
Product.belongsTo(User, {
  foreignKey: "userId",
  constraints: true,
  onDelete: "CASCADE",
});

User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: "userId" });

Cart.belongsToMany(Product, { through: CartProduct, foreignKey: "cartId" });
Product.belongsToMany(Cart, { through: CartProduct, foreignKey: "productId" });

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, {
  foreignKey: "userId",
  constraints: true,
  onDelete: "CASCADE",
});

Order.belongsToMany(Product, { through: OrderProduct, foreignKey: "orderId" });
Product.belongsToMany(Order, {
  through: OrderProduct,
  foreignKey: "productId",
});

sequelize
  .sync()
  .then(() => {
    console.log("successfully connected to database");
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((err) => {
    console.log("Error in connecting with database\n", err);
  });
