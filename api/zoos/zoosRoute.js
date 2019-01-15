const express = require("express");

const zoosDb = require("./zoosDb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const zoos = await zoosDb.get();
    res.status(200).json(zoos);
  } catch (err) {
    next({ code: 500 })
  }
});

module.exports = router;
