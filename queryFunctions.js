const mysql = require('mysql2')
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  function getAllEmployees(callback) {
    connection.promise().query("SELECT e.id, e.first_name, e.last_name, role.title, role.salary, department.name, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e INNER JOIN role ON role.id = e.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee m ON e.manager_id = m.id")
      .then(([rows, fields]) => {
        console.table(rows)
        callback()})
      .catch(console.table);
  }
  
  function getAllRoles(callback) {connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role INNER JOIN department ON department.id = role.department_id")
  .then(([rows, fields]) => {
    console.table(rows)
    callback()})
  .catch(console.table);
}

  function getAllDepartments(callback) {connection.promise().query("SELECT id, name FROM department")
  .then(([rows, fields]) => {
    console.table(rows)
    callback()})
  .catch(console.table);
}

  function addEmployee(callback) {connection.promise().query("INSERT INTO employee VALUES(default, ?, ?)")
  .then( () => callback())};

  function addDepartment(departmentName, callback) {connection.promise().query("INSERT INTO department VALUES(default, ?)", departmentName)
  .then( () => callback())}

  async function getRolesForInquirer() {
    return connection.promise().query("SELECT title FROM role")
    .then(([rows, fields]) => {
      return rows.map(row => row.title)})
    .catch(console.log);
}

  async function getManagersForInquirer() {
    return connection.promise().query("SELECT CONCAT(first_name,' ',last_name) AS full_name FROM employee WHERE manager_id IS NULL")
    .then(([rows, fields]) => {
      return rows.map(rows => rows.full_name)})
    .catch(console.log);
}

  async function getDepartmentForInquirer() {
    return connection.promise().query("SELECT name FROM department")
    .then(([rows, fields]) => {
      return rows.map(rows => rows.name)})
    .catch(console.log);
  }
  
  async function getFullNameForInquirer() {
    return connection.promise().query("SELECT CONCAT(first_name,' ',last_name) AS full_name FROM employee")
    .then(([rows, fields]) => {
      return rows.map(rows => rows.full_name)})
    .catch(console.log);
}

  module.exports = { getAllEmployees , getAllRoles , getAllDepartments , addEmployee, addDepartment, getRolesForInquirer, getManagersForInquirer , getDepartmentForInquirer , getFullNameForInquirer};
