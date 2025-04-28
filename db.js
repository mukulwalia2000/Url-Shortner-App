const mysql = require("mysql2");

const connection = mysql.createConnection({
    "host": "localhost",
    "database": "urlshortner",
    "user": "root",
    "password": "Mukul@:123"
})


module.exports.connection = connection