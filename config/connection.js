require("dotenv").config();

var mysql = require("mysql");
var connection;
// ************************* CONNECT TO MYSQL *************************
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost", //process.env.MYSQL_HOST,
        port: 3306, //process.env.MYSQL_PORT,
        user: "root", //process.env.MYSQL_USER,
        password: "password", //process.env.MYSQL_PASSWORD,
        database: "burgers_db", //process.env.MYSQL_DATABASE
    });
};

connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err);
    } else {
        console.log("connectedas id " + connection.threadId);
    };
});

module.exports = connection;