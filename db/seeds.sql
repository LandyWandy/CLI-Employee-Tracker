INSERT INTO department (id, name) 
VALUES (1, 'engineering'), (2, 'operations'), (3, 'sales');

INSERT INTO role (id, title, salary, department_id) 
VALUES (1, 'Engineer I', 60000.00, 1),
       (2, 'Engineer II', 80000.00, 1),
       (3, 'Engineer III', 100000.00, 1),
       (4, 'Engineering Manager', 120000.00, 1),
       (5, 'Operations I', 50000.00, 2),
       (6, 'Operations II', 70000.00, 2),
       (7, 'Operations III', 90000.00, 2),
       (8, 'Operations Manager', 110000.00, 2),
       (9, 'Sales I', 55000.00, 3),
       (10, 'Sales II', 75000.00, 3),
       (11, 'Sales III', 95000.00, 3),
       (12, 'Sales Manager', 115000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES (1, 'John', 'Doe', 1, 4),
       (2, 'Jane', 'Doe', 2, 4),
       (3, 'Jim', 'Doe', 3, 4),
       (4, 'Jack', 'Doe', 4, NULL),
       (5, 'Jill', 'Doe', 1, 4),
       (6, 'Alan', 'Smith', 5, 9),
       (7, 'Alice', 'Smith', 6, 9),
       (8, 'Alex', 'Smith', 7, 9),
       (9, 'Amelia', 'Smith', 8, NULL),
       (10, 'Arnold', 'Smith', 5, 9),
       (11, 'Bob', 'Johnson', 9, 14),
       (12, 'Beth', 'Johnson', 10, 14),
       (13, 'Bill', 'Johnson', 11, 14),
       (14, 'Bella', 'Johnson', 12, NULL),
       (15, 'Ben', 'Johnson', 9, 14);

