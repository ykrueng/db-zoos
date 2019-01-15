module.exports = (err, req, res, next) => {
  const { code } = err;

  res.status(code);

  switch (code) {
    case 400:
      res.json({
        error: "Invalid request."
      });
      break;
    case 404:
      res.json({
        error: "Cannot find requested record."
      });
      break;
    default:
      res.status(500).json({
        error: "Cannot perform requested action."
      });
      break;
  }
};