const questions = require('../json/questions.json');
const mainMenu = require('../index');

function readFromDB(menuChoice, connection) {
    connection.query({ sql: questions.viewAll[menuChoice].query }, function (err, results, fields) {
        // functions in this order to prevent inquirer glitch
        console.log("\n");
        console.table(results);
    })
};
module.exports = readFromDB;
