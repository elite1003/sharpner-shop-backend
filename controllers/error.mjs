import path from "path";
import rootDir from "../utils/root-dir.mjs";
export const error404 = (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "page-not-found.html"));
};
