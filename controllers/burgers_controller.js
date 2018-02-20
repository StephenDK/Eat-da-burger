// dependencies
var express = require("express");
var router = express.Router();

// Set the index route
router.get("/", function(req, res) {
    res.redirect("/burgers");
});