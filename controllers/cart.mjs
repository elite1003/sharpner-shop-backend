export const postCart = async (req, res, next) => {
  const { product } = req.body;
  console.log(product);
  res.status(200).json({ product });
};
export const getCart = async (req, res, next) => {
  const { product } = req.body;
  console.log(product);
  res.status(200).json({ product });
};
