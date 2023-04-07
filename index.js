const inquirer = require('inquirer');
const questions = require('./json/questions.json')
const handleAnswers = require('./lib/handleAnswers')

// inquirer prompts
inquirer
    .prompt([
        // load questions from json file
        questions.mainMenu
    ]).then((answer) => {
        // pass user answer to handleAnswer function
        handleAnswers(answer);
    })
    .catch((err) => {
        // do something if there is an error
        console.log(err)
    });