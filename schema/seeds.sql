-- create seeds to populate table columns --
INSERT INTO departments (department_name)
VALUES ("Research and Development"),
("Engineering"),
("Delivery"),
("Executive")
;
select * from departments;
INSERT INTO roles (role_title, department_id, salary)
VALUES ("Programmer", 2, 100000),
("Porter", 3, 70000),
("Researcher", 1, 120000),
("President", 4, 3000000)
;
SELECT * FROM roles;

INSERT INTO employees (first_name, last_name, role_id, manager)
VALUES ("Hideo", "Kojima", 1, null),
("Sam", "Bridges", 2, "Fragile"),
("Heartman", "Bridges", 3, "Samantha Strand"),
("Samantha", "Strand", 4, null),
("Bridget", "Strand", 4, "Samantha Strand"),
("Nico", "Stuart", 1, "Hideo Kojima"),
("Lockne", "Malingen", 1, "Samantha Strand"),
("Viktor", "Frank", 2, "Sam Bridges")
;

SELECT * FROM employees;

