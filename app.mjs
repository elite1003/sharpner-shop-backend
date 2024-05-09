import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("inside first middleware");
  next();
});
app.use("/", (req, res, next) => {
  res.send({ key: "value" });
});
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
