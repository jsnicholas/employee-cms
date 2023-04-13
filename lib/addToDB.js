const questions = require('../json/questions.json');
const connection = require('./connection');


function addToDB(inputData, menuChoice) {
    let dataLength = Object.keys(inputData).length;
    switch (dataLength) {
        case 1:
            connection.query(questions.add[menuChoice].query + '(' + JSON.stringify(inputData.inputData) + ')'), function () {
                console.log("\n");
            }
            break;
        case 3:
            connection.query(questions.add[menuChoice].query + `(${JSON.stringify(inputData.role_name)}, ${JSON.stringify(inputData.dept_id)}, ${JSON.stringify(inputData.salary)})`);
            break;
        case 4:
            connection.query(questions.add[menuChoice].query + `(${JSON.stringify(inputData.firstName)}, ${JSON.stringify(inputData.lastName)}, ${JSON.stringify(inputData.emp_role_id)}, ${JSON.stringify(inputData.emp_mgr_name)})`);
            break;
    }
};
module.exports = addToDB;