const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  try {
    const data = await burgers.all();
    console.log(data);
    res.render("index", { burgers: data });
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/burgers", async (req, res) => {
  try {
    const data = await burgers.create(["burger_name", "devoured"], [req.body.burger_name, false]);

    res.json({ id: data.insertId });

  } catch (error) {
    console.log(error);
  }
});

router.put("/api/burgers/:id", async (req, res) => {
  try {

    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    const data = await burgers.update({ devoured: true }, condition);

    if (data.changedRows === 0) {
      res.status(404).end();
    }

    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

// Export routes for server.js to use.
module.exports = router;