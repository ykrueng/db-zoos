const zoosDb = require("../zoos/zoosDb");

module.exports = async (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.length > 128) {
    next({ code: 400 });
  } else {
    const zoos = await zoosDb.get();

    if (zoos.find(zoo => zoo.name === name)) {
      next({ code: 400 });
    } else {
      next();
    }
  }
};
