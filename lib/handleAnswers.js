const questions = require('../json/questions.json')
const mysql = require('mysql2');


// mySQL2 connect to db
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'org_db'
});
// return user requested data
const handleAnswers = (answer) => {
    const menuChoice = JSON.stringify(answer.mainMenu).slice(1, 3);
    if (menuChoice < 4) {
        connection.query({ sql: questions.viewAll[menuChoice].query }, function (err, results, fields) {
            console.table(results);
        });
    } else if (menuChoice >= 4 && menuChoice < 7) {
        console.log("4 or more, but less than 7");
    } else {
        console.log("7");
    }
}
module.exports = handleAnswers;