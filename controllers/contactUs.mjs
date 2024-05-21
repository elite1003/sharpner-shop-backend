import path from "path";
import rootDir from "../utils/root-dir.mjs";

export const getContactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

export const postContactUs = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};

export const getSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
