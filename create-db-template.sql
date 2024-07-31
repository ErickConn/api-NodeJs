CREATE DATABASE IF NOT EXISTS Tasks
    DEFAULT CHARACTER SET = 'utf8mb4';

USE Tasks

CREATE TABLE Tasks
    (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        date DATETIME NOT NULL
    )