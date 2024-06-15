export const postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then((products) =>
      req.user
        .createOrder()
        .then((order) =>
          order.addProducts(
            products.map((p) => {
              p.OrderProduct = { quantity: p.CartProduct.quantity };
              return p;
            })
          )
        )
        .catch((err) => console.log(err))
    )
    .then((result) => fetchedCart.setProducts(null))
    .then((result) => {
      res.status(200).json(result[0] > 0 ? true : false);
    });
};

export const getOrder = (req, res, next) => {
  req.user
    .getOrders({ include: ["Products"] })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => console.log(err));
};
