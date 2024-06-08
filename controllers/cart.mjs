export const postCart = async (req, res, next) => {
  const { productId } = req.body;
  res.status(200).json({ productId });
};
export const getCart = async (req, res, next) => {
  const { product } = req.body;
  console.log(product);
  res.status(200).json({ product });
};
