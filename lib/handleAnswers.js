const questions = require('../json/questions.json')
const mysql = require('mysql2');
const inquirer = require('inquirer')


// mySQL2 connect to db
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'org_db'
});
// return user requested data
const handleAnswers = (answer, mainMenu) => {
    const menuChoice = JSON.stringify(answer.mainMenu).slice(1, 3);
    if (menuChoice < 4) {
        connection.query({ sql: questions.viewAll[menuChoice].query }, function (err, results, fields) {
            // functions in this order to prevent inquirer glitch
            console.log("\n")
            console.table(results);
            mainMenu();
        });
    } else if (menuChoice >= 4 && menuChoice < 7) {
        console.log(questions.add[menuChoice].query + '("test");')
        connection.query(questions.add[menuChoice].query + '("Computers");', function (err, results, fields) {
            console.log("\n");
            console.log(err);
            console.table(results);
            mainMenu();
        });
    } else {
        console.log("implement exit function")
    }
}
module.exports = handleAnswers;