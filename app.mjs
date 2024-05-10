import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
  res.send(
    `<form action = "/product" method = "POST"><label>name :</label><input type = "text" name= "name"/> 
    <label>size :</label><input type = "text" name = "size"/><button type = "submit">Add Product</button></form>`
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Hello from Home express</h1>");
});
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
