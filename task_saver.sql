DROP DATABASE IF EXISTS task_saver_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE task_saver_db;

USE task_saver_db;

-- Create the table tasks.
CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  task varchar(255) NOT NULL,
  completed varchar(10) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO tasks  (task, completed)
VALUES ('Task Saver activity', "false"),
       ('Day Planner Activity', "false"), 
       ('Node/MSQL - Challenge #3', "false");


select * from tasks