const express = require("express");

const bearsDb = require("./bearsDb");
// const checkName = require("../common/checkName");

const router = express.Router();

router
  .param("id", async (req, res, next, id) => {
    try {
      const bear = await bearsDb.get(Number(id));
      if (!bear) {
        next({ code: 400 });
      } else {
        req.bear = bear;
      }
      next();
    } catch (err) {
      next({ code: 500 });
    }
  })
  .post("/", async (req, res, next) => {
    const { name, zooId } = req.body;
    try {
      const id = await bearsDb.insert(zooId, { name });
      res.status(201).json({ id: id[0] });
    } catch (err) {
      next({ code: 500 });
    }
  })
  .get("/", async (req, res, next) => {
    try {
      const bears = await bearsDb.get();
      res.status(200).json(bears);
    } catch (err) {
      next({ code: 500 });
    }
  })
  .get("/:id", (req, res, next) => {
    res.status(200).json(req.bear);
  })
  .put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { name, zooId } = req.body;
    try {
      const count = await bearsDb.update(id, zooId, { name });
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
      const count = await bearsDb.remove(Number(req.params.id));
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
