CREATE DATABASE music;
USE music;
CREATE TABLE songs(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    duration INT NOT NULL,
    version VARCHAR(50),
    label VARCHAR(50)
);

INSERT INTO songs SET 
    name = 'Amerika',
    author = 'Young the Giant',
    duration = 240,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Something to Believe in',
    author = 'Young the Giant',
    duration = 228,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Elsewhere',
    author = 'Young the Giant',
    duration = 224,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Mr. Know-It-All',
    author = 'Young the Giant',
    duration = 202,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Jungle Youth',
    author = 'Young the Giant',
    duration = 221,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Titus Was Born',
    author = 'Young the Giant',
    duration = 243,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Repeat',
    author = 'Young the Giant',
    duration = 183,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Silvertongue',
    author = 'Young the Giant',
    duration = 197,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Art Exhibit',
    author = 'Young the Giant',
    duration = 244,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Nothings Over',
    author = 'Young the Giant',
    duration = 264,
    version = 'Original',
    label = 'Home of the Strange';

INSERT INTO songs SET 
    name = 'Home of the Strange',
    author = 'Young the Giant',
    duration = 157,
    version = 'Original',
    label = 'Home of the Strange';

SHOW TABLES;
DESCRIBE songs;