var express = require("express");
var router = express.Router();

/* GET promocion page. */
router.get("/", function (req, res, next) {
  res.render("promocion", { title: "Express" });
});

module.exports = router;
