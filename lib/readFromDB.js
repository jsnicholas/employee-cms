const questions = require('../json/questions.json');
const connection = require('./connection');

function readFromDB(menuChoice) {
    connection.query({ sql: questions.viewAll[menuChoice].query }, function (err, results, fields) {
        // functions in this order to prevent inquirer glitch
        console.log("\n");
        console.table(results);
    })
};
module.exports = readFromDB;
