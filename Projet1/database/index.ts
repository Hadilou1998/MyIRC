const mysql = require("mysql");
const port: number = 8000;

const connection = mysql.createConnection({
    host    : "localhost",
    user    : "myirc",
    password: "myirc",  
    database: "MyIRC"
});

connection.connect((err) => {
    if (err) {
        console.log("Error occurred", err);
    }
    else 
    {
        console.log("Connecté à Mysql Server!");

    }    
});
