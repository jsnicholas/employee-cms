-- create seeds to populate table columns --
INSERT INTO departments (department_name)
VALUES ("Research and Development"),
("Engineering"),
("Delivery"),
("Executive"),
("Management")
;
select * from departments;
INSERT INTO roles (role_title, department_id, salary)
VALUES ("Programmer", 2, 100000),
("Porter", 3, 70000),
("Researcher", 1, 120000),
("President", 4, 3000000),
("Manager", 5, 60000)
;
SELECT * FROM roles;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Samantha", "Strand", 4, null),
("Hideo", "Kojima", 1, null),
("Fragile", "Seydoux", 5, 1),
("Sam", "Bridges", 2, 3),
("Heartman", "Bridges", 3, 1),
("Bridget", "Strand", 5, 1),
("Nico", "Hartman", 1, 2),
("Lockne", "Malingen", 1, 1),
("Viktor", "Frank", 2, 3)
;

SELECT * FROM employees;

