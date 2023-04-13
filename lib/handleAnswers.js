const questions = require('../json/questions.json')
const inquirer = require('inquirer');
const addToDB = require('./addToDB');
const readFromDB = require('./readFromDB');
const connection = require('./connection');

// return user requested data
const handleAnswers = (answer, mainMenu) => {
    // create a slide to get the first two digits of the option
    // we will use this to determine what the user has selected and what to do with it
    const menuChoice = JSON.stringify(answer.mainMenu).slice(1, 3);
    switch (menuChoice) {
        case '01':
        case '02':
        case '03':
            readFromDB(menuChoice);
            // set a delay for mainMenu function, so that menu appears below data table
            setTimeout(mainMenu, 500);
            break;
        case '04':
            inquirer
                .prompt([
                    // ask the user for input
                    questions.enterData.department
                ])
                .then((inputData) => {
                    // pass relevant data to addToDB function
                    addToDB(inputData, menuChoice)
                    // then return to the main menu after 500ms delay
                    console.log(`Added ${inputData.inputData} to departments. Returning to main menu...`)
                    setTimeout(mainMenu, 500);
                })
            break;
        case '05':
            console.log("Add role option here")
            break;
        case '06':
            console.log(questions.enterData.employee);
            inquirer
                .prompt(
                    // load employee questions
                    questions.enterData.employee
                )
                .then((inputData) => {                    // pass relevant data to addToDB function
                    addToDB(inputData, menuChoice)
                    // log what has happened
                    console.log(`Added ${inputData.firstName} ${inputData.lastName} to employees. Returning to main menu...`);
                    // then return to the main menu after 500ms delay
                    setTimeout(mainMenu, 500);
                })
            break;
        case '07':
            console.log("Update an employee option here");
            break;
        case '08':
            console.log("Exiting app.")
            connection.end();
            break;
    }
}
module.exports = handleAnswers;