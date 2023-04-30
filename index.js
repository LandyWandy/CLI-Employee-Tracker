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
          queryFunctions.getAllEmployees(main)
          break;
        case 'Add employee':
          async function getRoles(){let roles = await queryFunctions.getRolesForInquirer()
          inquirer.prompt([
            {
              type: 'input',
              name: 'employeeFirstName',
              message: `Enter the employee's first name:`,
            },
            {
              type: 'input',
              name: 'employeeLastName',
              message: `Enter the employee's last name:`,
            },
            {
              type: 'list',
              name: 'employeeRole',
              message: `Choose the employee's role:`,
              choices: roles
            },
            {
              type: 'list',
              name: 'employeeManager',
              message: `Choose the employee's manager:`,
              choices: [
                ''
              ]
            }])}
            getRoles()
          break;
        case 'Update employee role':
          // Code to update employee role
          break;
        case 'View all roles':
          queryFunctions.getAllRoles(main)
          break;
        case 'Add role':
          // Code to add role
          break;
        case 'View all departments':
          queryFunctions.getAllDepartments(main)
          break;
          case 'Add department':
            inquirer.prompt([
              {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
              }
            ]).then((answers) => {
              queryFunctions.addDepartment(answers.departmentName, main)
            });
            break;
        case 'Quit':
          console.log('Thank you for using Employee Tracker!')
          process.exit();
          break;
      }
    });
  }

  main();
