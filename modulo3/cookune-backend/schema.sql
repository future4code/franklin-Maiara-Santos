USE `franklin-maiara-santos`;

CREATE TABLE `Users` (
    id VARCHAR(255) PRIMARY KEY UNIQUE,
    `name` VARCHAR(255) NOT NULL, 
    `password` VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    
);

CREATE TABLE `Recipe` (
    id VARCHAR(255) PRIMARY KEY UNIQUE,
    title VARCHAR(255) NOT NULL, 
    `description` VARCHAR(255) NOT NULL,
    createdAt DATE NOT NULL,
);