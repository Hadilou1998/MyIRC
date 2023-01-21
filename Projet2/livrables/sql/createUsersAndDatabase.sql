CREATE USER 'bubble'@'localhost' IDENTIFIED BY 'tea';
GRANT ALL PRIVILEGES ON * . * TO 'bubble'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE BubbleMyTea;