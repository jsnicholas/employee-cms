const connection = require('./connection');

function updateDB(inputData) {
    connection.query({
        sql: `UPDATE employees SET role_id = ${inputData.emp_new_role_id} WHERE id = ${inputData.emp_id}`
    })
}

module.exports = updateDB;