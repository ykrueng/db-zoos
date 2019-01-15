module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.length > 128) {
    next({ code: 400 });
  }

  next();
};
