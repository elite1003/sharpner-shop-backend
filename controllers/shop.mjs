export const getProducts = async (req, res, next) => {
  try {
    const products = await req.user.getProducts();
    const mappedProducts = products.map((p) => {
      return {
        id: p.id,
        price: p.price,
        productName: p.productName,
        imageURL: p.imageURL,
        description: p.description,
      };
    });
    res.status(200).json(mappedProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
