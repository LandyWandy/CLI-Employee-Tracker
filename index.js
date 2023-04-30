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
          // Still needs to add to Database
          async function waitForManagerAndRole(){
            let roles = await queryFunctions.getRolesForInquirer()
            let employeeManagers = await queryFunctions.getManagersForInquirer()
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
              choices: employeeManagers
            }])}
            waitForManagerAndRole();
          break;
        case 'Update employee role':
          // Code to update employee role
          break;
        case 'View all roles':
          queryFunctions.getAllRoles(main);
          break;
        case 'Add role':
          // Still needs to add to Database
          async function waitForDepartments(){
            let departments = await queryFunctions.getDepartmentForInquirer()
            inquirer.prompt([
              {
                type: 'input',
                name: 'addedRole',
                message: `Enter the new role:`,
              },
              {
                type: 'input',
                name: 'addedSalary',
                message: `Enter the new role's salary:`,
              },
              {
                type: 'list',
                name: 'addRolesDepartment',
                message: `Which department does this role belong to:`,
                choices: departments
              }]).then(() => {
                main()
              })};
              waitForDepartments();
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
