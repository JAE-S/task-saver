
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE task_saver_db;

USE task_saver_db;

-- Create the table tasks.
CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO tasks (task) VALUES ('Pick up milk.');
INSERT INTO tasks (task) VALUES ('Mow the lawn.');
INSERT INTO tasks (task) VALUES ('Call Shannon back.');

select * from tasks