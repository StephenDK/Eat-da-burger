// require the mysql connection 
var connection = require("../config/connection.js");

// Object relational mapper
var orm = {
    SelectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};