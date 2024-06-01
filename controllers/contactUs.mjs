export const postContactUs = (req, res, next) => {
  console.log(req.body);
  res.status(200).send({ ok: true });
};
