const questions = require('../json/questions.json');

function addToDB(inputData, menuChoice, connection) {
    connection.query(questions.add[menuChoice].query + '(' + JSON.stringify(inputData.inputData) + ')'), function () {
        console.log("\n");
        console.log(`Added "${inputData.inputData}" to database.`)
    }
}
module.exports = addToDB;