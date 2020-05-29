const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  const data = await burgers.all();

  res.render("index", { burgers: data });
});

router.post("/api/burgers", async (req, res) => {
  const data = await burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]);

  res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  const data = await cat.update({ devoured: req.body.devoured }, condition);

  if (data.changedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;