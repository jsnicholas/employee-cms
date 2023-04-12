-- Active: 1681148031468@@127.0.0.1@3306@org_db
-- check if org_db exists already --
-- if so, delete it and create a fresh org_db --
DROP DATABASE IF EXISTS org_db;
CREATE DATABASE org_db;

USE org_db;
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    role_title VARCHAR(20),
    department_name VARCHAR(20),
    salary INT,
    manager VARCHAR(20)
);

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    department_name VARCHAR(20) NOT NULL
);

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_title VARCHAR(20) NOT NULL,
    department_id INT,
    salary INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
); 