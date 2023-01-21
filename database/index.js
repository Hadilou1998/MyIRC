var mysql = require("mysql");
var port = 8000;
var connection = mysql.createConnection({
    host: "localhost",
    user: "myirc",
    password: "myirc",
    database: "MyIRC"
});
connection.connect(function (err) {
    if (err) {
        console.log("Error occurred", err);
    }
    else {
        console.log("Connecté à Mysql Server!");
    }
});
