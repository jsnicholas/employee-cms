-- check if org_db exists already --
-- if so, delete it and create a fresh org_db --
DROP DATABASE IF EXISTS org_db;
CREATE DATABASE org_db;

USE org_db;

CREATE TABLE IF NOT EXISTS departments(
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS roles(
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS employees(
    id INT AUTO_INCREMENT PRIMARY KEY
);