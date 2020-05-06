-- Header space for easier readability

-- Write SQL queries in this file that do the following:

-- Create the taskManager_db.
CREATE DATABASE taskManager_db;
-- Switch to or use the taskManager_db.
USE taskManager_db;


-- Create a tasks table with these fields:
CREATE TABLE tasks
(
-- id: an auto incrementing int that serves as the primary key.
id int NOT NULL AUTO_INCREMENT,
-- task_name: a string.
task_name varchar(255) NOT NULL,
-- completed: a boolean.
completed BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);