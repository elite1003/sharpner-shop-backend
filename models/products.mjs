import fs from "node:fs/promises";

class Product {
  constructor(t) {
    this.title = t;
  }
  saveProduct(cb) {
    let products = [];
    fs.readFile("products.json", "utf-8")
      .then((res) => {
        products = JSON.parse(res);
        products.push(this);
      })
      .catch((err) => {
        products.push(this);
      })
      .finally(() => {
        fs.writeFile("products.json", JSON.stringify(products))
          .then(() => {
            cb();
          })
          .catch((err) => console.log(err));
      });
  }
  static async fetchAllProducts(cb) {
    return fs
      .readFile("products.json", "utf-8")
      .then((res) => {
        return JSON.parse(res);
      })
      .catch((err) => {
        return [];
      });
  }
}
export default Product;
