const questions = require('../json/questions.json')
const mysql = require('mysql2');
const inquirer = require('inquirer');
const addToDB = require('./addToDB');
const readFromDB = require('./readFromDB');

// mySQL2 connect to db
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'org_db'
});
// return user requested data
const handleAnswers = (answer, mainMenu) => {
    // create a slide to get the first two digits of the option
    // we will use this to determine what the user has selected and what to do with it
    const menuChoice = JSON.stringify(answer.mainMenu).slice(1, 3);
    if (menuChoice < 4) {
        readFromDB(menuChoice, connection);
        setTimeout(mainMenu, 500);
    } else if (menuChoice >= 4 && menuChoice < 7) {
        inquirer
            .prompt([
                // ask the user for input
                questions.enterData
            ])
            .then((inputData) => {
                // pass relevant data to addToDB function
                addToDB(inputData, menuChoice, connection)
                // then return to the main menu
                mainMenu();
            })
    } else {
        console.log("implement exit function")
    }
}
module.exports = handleAnswers;