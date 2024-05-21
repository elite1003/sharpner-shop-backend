import path from "path";
import rootDir from "../utils/root-dir.mjs";
export const getLogin = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login-form.html"));
};
