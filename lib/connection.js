const mysql = require('mysql2');
// mySQL2 connect to db
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'org_db'
});

module.exports = connection;