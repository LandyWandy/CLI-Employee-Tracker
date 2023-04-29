const inquirer = require('inquirer');
const queryFunctions = require('./queryFunctions')

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

  function main() {
    inquirer.prompt(questions).then((answers) => {
      switch (answers.action) {
        case 'View all employees':
          queryFunctions.getAllEmployees()
          break;
        case 'Add employee':
          // Code to add employee
          break;
        case 'Update employee role':
          // Code to update employee role
          break;
        case 'View all roles':
          // Code to view all roles
          break;
        case 'Add role':
          // Code to add role
          break;
        case 'View all departments':
          // Code to view all departments
          break;
        case 'Add department':
          // Code to add department
          break;
        case 'Quit':
          console.log('Thank you for using Employee Tracker!')
          process.exit();
          break;
      }
    });
  }
  
  main();
  // connection.promise().query("SELECT * FROM employee")
  // .then( ([rows,fields]) => {
  //   console.table(rows);
  // })
  // .catch(console.table)
  // .then( () => connection.end());

  // console.log(allEmployees)
  
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