// dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Set the index route
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

// get all burgers
router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        // render all burgers with handelbars
        res.render("index", { burger_data: burgerData});
    });
});

// post route
router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        // after post redirect back to route
        res.redirect("/");
    });
});

// put route
router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        // redirect user back to home after update
        res.redirect("/");
    });
});

// export routes 
module.exports = router;
