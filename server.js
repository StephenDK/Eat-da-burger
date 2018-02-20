// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOveride = require("method-override");
var exphbs = require("express-handlebars");

// Set up express app
var app = express();

// Setup port environment
var PORT = process.env.PORT || 8080;

// Set the public directory to serve static
app.use(express.static(__dirname + "/public"));

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// override with post
app.use(methodOveride("_method"));
// set view engine to use handel bars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// inport the burger controller
var routes = require("./controllers/burgers_controller.js");

// setup routes
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// Start server 
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
})


