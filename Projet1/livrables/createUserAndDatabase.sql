
CREATE USER 'myirc'@'localhost' IDENTIFIED BY 'myirc';
GRANT ALL PRIVILEGES ON * . * TO 'myirc'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE MyIRC;
