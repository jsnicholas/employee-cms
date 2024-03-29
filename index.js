const inquirer = require('inquirer');
const questions = require('./json/questions.json');
const handleAnswers = require('./lib/handleAnswers');

// inquirer prompts
function mainMenu() {
    inquirer
        .prompt([
            // load questions from json file
            questions.mainMenu
        ]).then((answer) => {
            // pass user answer and mainMenu function to handleAnswer function
            handleAnswers(answer, mainMenu);
        })
        .catch((err) => {
            // do something if there is an error
            console.log(err)
        })
}

mainMenu();