const mysql = require('mysql2')
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  function getAllEmployees() {connection.promise().query("SELECT e.id, e.first_name, e.last_name, role.title, role.salary, department.name, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e INNER JOIN role ON role.id = e.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee m ON e.manager_id = m.id")
  .then( ([rows,fields]) => {console.table(rows);})
  .catch(console.table)
  .then( () => connection.end())};

  function getAllRoles() {connection.promise().query("")
  .then( ([rows,fields]) => {console.table(rows);})
  .catch(console.table)
  .then( () => connection.end())};

  function getAllDepartments() {connection.promise().query("")
  .then( ([rows,fields]) => {console.table(rows);})
  .catch(console.table)
  .then( () => connection.end())};

  module.exports = { getAllEmployees , getAllRoles, getAllDepartments};
