var express = require("express");
var burgers = require("../models/burger.js")
var router = express.Router();

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var allBurgers = {
      burgers: data
    };
   
    res.render("index", allBurgers);
  })
  
});

router.post("/api/burgers", function(req, res) {
  if (req.body.name === "") return;
  burgers.insertOne("burger_name", "devoured", req.body.name, false, function(data) {
    res.redirect('/');
  });
});

router.get("/api/burgers/:id", function(req, res) {
  burgers.updateOne(true, "id", [req.params.id], function(data) {
    res.redirect('/');
  })
});

module.exports = router
