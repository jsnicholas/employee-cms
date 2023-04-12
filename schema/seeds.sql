-- create seeds to populate table columns --

INSERT INTO employees (first_name, last_name, role_title, department_name, salary, manager)
VALUES ("Nico", "Hartman", "Developer", "Engineering", "100000", "Rosalia"),
("Sam", "Bridges", "Porter", "Delivery", "40000", "Die Hardman");

SELECT * FROM employees;

INSERT INTO departments (department_name)
VALUES ("Finance"),
("Engineering"),("Delivery");

select * from departments;

INSERT INTO roles (role_title, department_id, salary)
VALUES ("Programmer", "01", "100000");
