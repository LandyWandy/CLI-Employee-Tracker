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
            }]).then((answers) => {
              queryFunctions.addEmployee(answers.employeeRole, answers.employeeManager, answers.employeeFirstName, answers.employeeLastName, main)
            })};
            waitForManagerAndRole();
          break;
        case 'Update employee role':
          // Still needs to add to Database
          async function waitForNameAndRole(){
            let fullNames = await queryFunctions.getFullNameForInquirer();
            let roles = await queryFunctions.getRolesForInquirer();
            inquirer.prompt([
              {
                type: 'list',
                name: 'employeeToChangeRole',
                message: `Enter the employee whose role you want to change:`,
                choices: fullNames
              },
              {
                type: 'list',
                name: 'employeesNewRole',
                message: `Enter the role employee's new role:`,
                choices: roles
              }]).then(() => {
                main()
              })};
              waitForNameAndRole();
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
