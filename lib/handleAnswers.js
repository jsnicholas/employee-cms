const questions = require('../json/questions.json')
const mysql = require('mysql2');

// mySQL2 connect to db
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'org_db'
});

const handleAnswers = (answer) => {
    const menuChoice = JSON.stringify(answer.mainMenu).slice(1, 3);
    if (menuChoice < 4) {
        connection.query(questions.viewAll[menuChoice].query)
    } else {
        console.log("4 or more")
    }
}
module.exports = handleAnswers;