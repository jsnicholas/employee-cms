const questions = require('../json/questions.json');
const connection = require('./connection');


function addToDB(inputData, menuChoice) {
    console.log(inputData.inputData);
    if (Object.keys(inputData).length === 1) {
        connection.query(questions.add[menuChoice].query + '(' + JSON.stringify(inputData.inputData) + ')'), function () {
            console.log("\n");
        }
    } else {
        console.log("this function is in under development")
    }
}
module.exports = addToDB;