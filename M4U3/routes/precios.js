var express = require("express");
var router = express.Router();

/* GET precios page. */
router.get("/", function (req, res, next) {
  res.render("precios", { title: "Express" });
});

module.exports = router;
