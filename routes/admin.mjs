import express from "express";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action = "/admin/add-product" method = "POST"><label>name :</label><input type = "text" name= "name"/> 
    <label>size :</label><input type = "text" name = "size"/><button type = "submit">Add Product</button></form>`
  );
});
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

export default router;
