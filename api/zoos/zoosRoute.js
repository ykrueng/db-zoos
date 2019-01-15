const express = require("express");

const zoosDb = require("./zoosDb");
const checkName = require("../common/checkName");

const router = express.Router();

router
  .param("id", async (req, res, next, id) => {
    try {
      const zoo = await zoosDb.get(Number(id));
      if (!zoo) {
        next({ code: 400 });
      } else {
        req.zoo = zoo;
      }
      next();
    } catch (err) {
      next({ code: 500 });
    }
  })
  .post("/", checkName, async (req, res, next) => {
    const { name } = req.body;
    try {
      const id = await zoosDb.insert({ name });
      res.status(201).json({ id: id[0] });
    } catch (err) {
      next({ code: 500 });
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
  })
  .put("/:id", checkName, async(req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const count = await zoosDb.update(id, { name });
      if (count === 1) {
        res.sendStatus(204);
      } else {
        next({ code: 500 });
      }
    } catch (err) {
      next({ code: 500 });
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const count = await zoosDb.remove(Number(req.params.id));
      if (count === 1) {
        res.sendStatus(204);
      } else {
        next({ code: 500 });
      }
    } catch (err) {
      next({ code: 500 });
    }
  });

module.exports = router;
