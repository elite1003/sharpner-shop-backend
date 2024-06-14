import Product from "../models/products.mjs";

export const postCart = async (req, res, next) => {
  const { productId } = req.body;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: productId } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) product = products[0];
      if (product) {
        const oldQuantity = product.CartProduct.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      } else {
        return Product.findByPk(productId);
      }
    })
    .then((product) => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
    })
    .then((data) => {
      res.status(200).json(data ? true : false);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
export const getCart = async (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => cart.getProducts())
    .then((products) => {
      const mappedProducts = products.map((p) => {
        return {
          id: p.id,
          productName: p.productName,
          price: p.price,
          quantity: p.CartProduct.quantity,
        };
      });
      res.status(200).json(mappedProducts);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
export const deleteProductFromCart = async (req, res, next) => {
  const { productId } = req.params;
  req.user
    .getCart()
    .then((cart) => cart.getProducts({ where: { id: productId } }))
    .then((products) => {
      const product = products[0];
      return product.CartProduct.destroy();
    })
    .then((result) => {
      res.status(200).json(result ? true : false);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
