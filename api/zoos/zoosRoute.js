const express = require("express");

const zoosDb = require("./zoosDb");

const router = express.Router();

router
  .param("id", async (req, res, next, id) => {
    try {
      const zoo = await zoosDb.get(Number(id));
      req.zoo = zoo;
      next();
    } catch(err) {
      next({ code: 500 })
    }
  })
  .get("/", async (req, res, next) => {
    try {
      const zoos = await zoosDb.get();
      res.status(200).json(zoos);
    } catch (err) {
      next({ code: 500 });
    }
  })
  .get("/:id", (req, res, next) => {
    res.status(200).json(req.zoo);
  });

module.exports = router;
