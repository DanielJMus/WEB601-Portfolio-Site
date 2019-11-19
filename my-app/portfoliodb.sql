DROP DATABASE IF EXISTS portfoliodb;
CREATE DATABASE portfoliodb;
USE portfoliodb;

DROP TABLE IF EXISTS tblUsers;
CREATE TABLE tblUsers(
	ID INT auto_increment PRIMARY KEY,
	`FIRSTNAME` VARCHAR(60) NOT NULL,  
	`LASTNAME` VARCHAR(255) NOT NULL,
	`EMAIL` VARCHAR(255) NOT NULL UNIQUE,
    `PASSWORD` VARCHAR(255) NOT NULL,
	`ADMIN` BOOLEAN DEFAULT 0
);

DROP TABLE IF EXISTS tblPhotoshop;
CREATE TABLE tblPhotoshop(
	ID INT auto_increment PRIMARY KEY,
	`TITLE` VARCHAR(60) NOT NULL,  
	`DESCRIPTION` TEXT NOT NULL, 
	`IMAGEURL` VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS tblModels;
CREATE TABLE tblModels(
	ID INT auto_increment PRIMARY KEY,
	`TITLE` VARCHAR(60) NOT NULL,  
	`DESCRIPTION` TEXT NOT NULL, 
	`URL` VARCHAR(255) NOT NULL,
	`IMAGEURL` VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS tblGamedev;
CREATE TABLE tblGamedev(
	ID INT auto_increment PRIMARY KEY,
	`TITLE` VARCHAR(60) NOT NULL,  
	`DESCRIPTION` TEXT NOT NULL, 
	`URL` VARCHAR(255) NOT NULL,
    `IMAGEURL` VARCHAR(255) NOT NULL
);

ALTER TABLE tblUsers
    ADD CONSTRAINT FIRSTNAME_LEN_CHECK CHECK (LENGTH(FIRSTNAME) > 1),
    ADD CONSTRAINT LASTNAME_LEN_CHECK CHECK (LENGTH(LASTNAME) > 1),
    ADD CONSTRAINT EMAIL_LEN_CHECK CHECK (LENGTH(EMAIL) > 1),
    ADD CONSTRAINT PASSWORD_LEN_CHECK CHECK (LENGTH(PASSWORD) > 1);

INSERT INTO tblUsers (FIRSTNAME, LASTNAME, EMAIL, PASSWORD, ADMIN) 
VALUES  ('Daniel', 'Musgrave', 'danielmus1999@hotmail.com', 'Password1', 1),
		('Admin', 'Admin', 'Admin@gmail.com', 'Admin', 1),
		('Bob', 'Stevenson', 'bob@gmail.com', 'bob', 0);

INSERT INTO tblPhotoshop (TITLE, DESCRIPTION, IMAGEURL) 
VALUES  ('Colorization 1', 'Colorization 1', "https://i.imgur.com/R1d4ZoO.jpg"),
        ('Colorization 4', 'Colorization 4', "https://i.imgur.com/T6JQSrU.jpg"),
		('Colorization 7', 'Colorization 7', "https://i.imgur.com/FXHasod.jpg"),
		('Colorization 2', 'Colorization 2', "https://i.imgur.com/vOn3v9E.jpg"),
		('Colorization 5', 'Colorization 5', "https://i.imgur.com/62fgk7t.jpg"),
		('Colorization 6', 'Colorization 6', "https://i.imgur.com/T6IoI7r.jpg"),
		('Nayland College Design work', 'Nayland College Design work', "https://i.imgur.com/MHlxebN.jpg"),
		('Stuart', 'Stuart', "https://i.imgur.com/wgPXJ1J.jpg");
        
INSERT INTO tblGamedev (TITLE, DESCRIPTION, URL, IMAGEURL) 
VALUES  ('Unity Realism Test', 'Working with Unity in an attempt to create photorealistic environments, this project being a 3D representation of my own room. The project aimed to demonstrate the usage of small detail textures to emulate large detail, such as the slight noise on the carpet to give it a more natural look.', "https://i.imgur.com/2kQVZKb.png", "https://i.imgur.com/2kQVZKb.png"),
		('Horror Game Prison Environment', 'Working with darker, more ambient environments for a small horror project, again using many low-detail textures in order to create a highly detailed environment overall with few uniform or blank textures.', "https://i.imgur.com/SkvGTzW.jpg", "https://i.imgur.com/SkvGTzW.jpg"),
		('Room Environment 2015', 'My first time making a room environment for a hobby project with a friend, less realistic and more on the stylized end.', "https://i.imgur.com/Ggc2IIm.jpg", "https://i.imgur.com/Ggc2IIm.jpg");

INSERT INTO tblModels (TITLE, DESCRIPTION, URL, IMAGEURL) 
VALUES  ('Game-Ready Treasure Chest (Rigged)', 'Stylized treasure chest model with hand-painted textures, first time doing a stylized model.', "https://i.imgur.com/gSQuc6O.png", "https://i.imgur.com/gSQuc6O.png"),
		('Game-Ready Cartoon Ferm', 'Another hand-painted model with a low poly count and my most popular model to be sold on TurboSquid.', "https://i.imgur.com/nEssjam.jpg", "https://i.imgur.com/nEssjam.jpg"),
		('Second Life MUV501 Models', 'Chair models for a threater environment as part of a Multi-User Virtual Environment course at NMIT, the models aimed to look nice while also retaining as low of a poly count as they could.', "https://i.imgur.com/jNxdDUt.png", "https://i.imgur.com/jNxdDUt.png"),
        ('Cartoon Game Character', 'The main character for one of my first game projects, fully rigged and animated for a 3D platform environment.', "https://i.imgur.com/KxdUX36.png", "https://i.imgur.com/KxdUX36.png");



SELECT * FROM tblPhotoshop