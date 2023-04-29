const mysql = require('mysql2')
const inquirer = require('inquirer')
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  const questions = [
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'Add employee',
        'Update employee role',
        'View all roles',
        'Add role',
        'View all departments',
        'Add department',
        'Quit'
      ]
    }
  ];

  // connection.query(
  //   'SELECT * FROM employee WHERE manager_id = 14',
  //   function(err, results, fields) {
  //     console.log(results); // results contains rows returned by server
  //   }
  // );
  // inquirer
  // .prompt([
  //   What
  // ])
  // .then((answers) => {
  //   // Use user feedback for... whatever!!
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });