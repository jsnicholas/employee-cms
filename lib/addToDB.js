const questions = require('../json/questions.json');
const connection = require('./connection');

function addToDB(inputData, menuChoice) {
    switch (menuChoice) {
        case '04':
            connection.query(questions.add[menuChoice].query + '(' + JSON.stringify(inputData.inputData) + ')'), function () {
                console.log("\n");
            }
            break;
        case '05':
            connection.query(questions.add[menuChoice].query + `(${JSON.stringify(inputData.role_name)}, ${JSON.stringify(inputData.dept_id)}, ${JSON.stringify(inputData.salary)})`);
            break;
        case '06':
            connection.query(questions.add[menuChoice].query + `(${JSON.stringify(inputData.firstName)}, ${JSON.stringify(inputData.lastName)}, ${JSON.stringify(inputData.emp_role_id)}, ${JSON.stringify(inputData.manager_id)})`);
            break;
        case '07':
            break;
    }
};
module.exports = addToDB;