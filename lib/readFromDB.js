const questions = require('../json/questions.json');
const connection = require('./connection');
const cTable = require('console.table');
function readFromDB(menuChoice) {
    connection.query({ sql: questions.viewAll[menuChoice].query }, function (err, results, fields) {
        console.log("\n");
        console.table(results);
    })
};
module.exports = readFromDB;
