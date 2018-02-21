// mysql connection
// dependencies
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "StephenDKlein360",
        database: "burgers_db"
    });
};


// Make connection 
// error handeling
connection.connect(function(err) {
    if (err) {
        console.log("Error connection: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for orm
module.exports = connection;

