-- starting database:

sql_start
mysql --host=127.0.0.1
use PROJECT;
SET time_zone='+09:30';
-- Starting database finish-------------------------------------



-- Create Tables------------------------------------------------------

CREATE TABLE hotspots(
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    venue_id INT,
    start_date DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (venue_id) REFERENCES venue(venue_id) ON DELETE SET NULL
);


CREATE TABLE admin(
    employeeID VARCHAR(8) UNIQUE NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20) ,
    email VARCHAR(100) UNIQUE,
    password_hash  VARCHAR(256),
    PRIMARY KEY (employeeID)
);

CREATE TABLE manager(
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(256),
    username VARCHAR(100) UNIQUE,
    phone VARCHAR(20) ,
    PRIMARY KEY (id)
);


CREATE TABLE individual (
indi_id int not null auto_increment,
first_name varchar(255),
last_name varchar(255),
DOB varchar(15),
email varchar(255) UNIQUE,
phone varchar(15),
adress varchar(256),
username varchar(100) UNIQUE,
password_hash varchar(256),
role INT not null,
primary key (indi_id)
);

CREATE TABLE venue (
    venue_id int not null auto_increment,
    name varchar(255),
    number_venue varchar(20),
    street varchar(255),
    suburb varchar(100),
    postcode int,
    city varchar(100),
    state varchar(100),
    code int,
    longitude double(180, 8),
    latitude double(180,8),
    manager_id int,

    PRIMARY KEY (venue_id),
    FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL ON UPDATE CASCADE
);

create table checkin (
    checkin_id int not null auto_increment,
    checkin_date DATETIME,
    indi_id int,
    venue_id int,
    primary key (checkin_id),
    FOREIGN KEY (venue_id) REFERENCES venue(venue_id) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (indi_id) REFERENCES individual(indi_id) ON DELETE CASCADE ON UPDATE CASCADE
);






-- VIEW

-- A virtual table of current hotspots
CREATE VIEW currentHotspots AS
SELECT hotspots.id,venue.venue_id,DATE_FORMAT(hotspots.start_date, "%Y-%m-%d %H:%i:%s") AS start_date,  venue.name, venue.number_venue,venue.street,venue.suburb,venue.postcode,venue.city,venue.state,venue.manager_id,venue.longitude,venue.latitude,venue.code,hotspots.end_date FROM hotspots INNER JOIN venue ON hotspots.venue_id = venue.venue_id WHERE hotspots.start_date <= NOW() and hotspots.end_date >= NOW();

-- A virtual table of all hotspots information, wether they are active currently or not,  and their locations
CREATE VIEW allHotspots AS
SELECT hotspots.id,venue.venue_id,DATE_FORMAT(hotspots.start_date, "%Y-%m-%d %H:%i:%s") AS start_date,  venue.name, venue.number_venue,venue.street,venue.suburb,venue.postcode,venue.city,venue.state,venue.manager_id,venue.longitude,venue.latitude,venue.code,DATE_FORMAT(hotspots.end_date, "%Y-%m-%d %H:%i:%s") AS end_date, (hotspots.start_date <= NOW() and hotspots.end_date >= NOW()) AS active FROM hotspots INNER JOIN venue ON hotspots.venue_id = venue.venue_id;



---View draft that didn't get used
-- SELECT hotspots.id,venue.venue_id,DATE_FORMAT(hotspots.start_date, "%Y-%m-%d %H:%i:%s") AS start_date,  venue.name, venue.number_venue,venue.street,venue.suburb,venue.postcode,venue.city,venue.state,venue.manager_id,venue.longitude,venue.latitude,venue.code,hotspots.end_date FROM hotspots INNER JOIN venue ON hotspots.venue_id = venue.venue_id WHERE NOW() between hotspots.start_date and hotspots.end_date;

-- SELECT hotspots.id,venue.venue_id,DATE_FORMAT(hotspots.start_date, "%Y-%m-%d %H:%i:%s") AS start_date,  hotspots.timeframe,venue.name, venue.number_venue,venue.street,venue.suburb,venue.postcode,venue.city,venue.state,venue.manager_id,venue.longitude,venue.latitude,venue.code,DATE_FORMAT(DATE_ADD(hotspots.start_date, INTERVAL hotspots.timeframe DAY), "%Y-%m-%d %H:%i:%s") AS end_date FROM hotspots INNER JOIN venue ON hotspots.venue_id = venue.venue_id WHERE DATE_ADD(hotspots.start_date, INTERVAL hotspots.timeframe DAY) >= NOW() and Date(hotspots.start_date) <= Date(NOW());
-- Create Tables end---------------------------------------------------------------------------------------------------------------------





-- Queries-----------------------------------------------------------------------------------------------------------------------------------


-- Individual queries-----------------------
INSERT INTO individual (first_name,last_name,DOB,email,phone, username, role) values ( 'long','nguyen', '2001/01/22', 'gh@gmail.com', '09057637576', 'long2201',0);

INSERT INTO individual (first_name,last_name,DOB,email,phone, username, role) values ( 'shane', 'filan','1980/04/02', 'shane@gmail.com', '0905763755', 'shane0402', 0);

SELECT indi_id, first_name, last_name, DOB, email, phone, username, address from individual WHERE indi_id=?;

UPDATE individual  SET
                    first_name=?,
                    last_name=?,
                    DOB=?,
                    email=?,
                    phone=?,
                    address=?
                    WHERE indi_id=?;

SELECT indi_id,last_name,first_name,DOB,email,phone,username,password_hash FROM individual WHERE username = ? OR email = ?;

INSERT INTO individual (last_name,first_name,DOB,email, phone,username,password_hash) VALUES ('test1Last','test2first', '1934-01-23', 'test1@individual.com', '0410111111', 'test1', '1234567' );


-- VENUE queries-----------------------
INSERT INTO venue (name, number_venue, street, suburb, postcode, city, state) values ('KFC', '8', 'Hindley St', 'North Terrace', 5000, 'Adelaide', 'SA');

INSERT INTO venue (name, number_venue, street, suburb, postcode, city, state) values ('Maccas', '10', 'Melbourne St', 'Woodville', 5031, 'Adelaide', 'SA');

SELECT venue_id, name, number_venue, street, suburb, postcode, city, state, code FROM venue;

SELECT  venue_id, longitude, latitude FROM venue
                  WHERE ABS(longitude-?)<=? AND ABS(latitude-?)<=?;

INSERT INTO venue (name,state,code,longitude,latitude) VALUES ('University of Adelaide','SA','5005','138.604911','-34.9202175');

INSERT INTO venue  (name,number_venue,street,suburb,postcode,city,state,code,manager_id,longitude,latitude) VALUES ();

-- admin insert
INSERT INTO venue  (name,number_venue,street,suburb,postcode,state,code,longitude,latitude) VALUES (?,?,?,?,?,?,'SA',?,?);


INSERT INTO venue  (name,number_venue,street,suburb,postcode,state,code,longitude,latitude) VALUES (?,?,?,?,?,'SA',floor(RAND()*(200000-100000)+100000),?,?);

SELECT * FROM venue WHERE name = ?;

ALTER TABLE venue
MODIFY COLUMN code INT NOT NULL UNIQUE;

ALTER TABLE venue
MODIFY COLUMN name VARCHAR(255) NOT NULL UNIQUE;

ALTER TABLE venue DROP COLUMN code;

UPDATE venue
SET code = 303030
WHERE venue_id =3;

UPDATE venue
SET manager_id = ?
WHERE venue_id =?;

UPDATE venue
SET manager_id = null
WHERE venue_id =6;

venue_ibfk_1

ALTER TABLE venue DROP FOREIGN KEY fk_manager_id;

ALTER TABLE venue ADD CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL ON UPDATE CASCADE;

UPDATE venue SET manager_id = 6 WHERE venue_id =1;


-- checkin queries--------
SELECT DATE_FORMAT(checkin.checkin_date, "%Y-%m-%d %H:%i:%s") as Date, venue.name, venue.number_venue, venue.street, venue.suburb,
                        venue.postcode, venue.city, venue.state, venue.longitude, venue.latitude, currentHotspots.id
                        FROM checkin
                        INNER JOIN venue ON checkin.venue_id=venue.venue_id
                        LEFT JOIN currentHotspots ON currentHotspots.venue_id=venue.venue_id
                        WHERE checkin.indi_id=?;

INSERT INTO checkin (checkin_date, indi_id, venue_id) VALUES (?,?,?);

ALTER TABLE checkin
DROP FOREIGN KEY checkin_ibfk_4;


ALTER TABLE checkin
ADD FOREIGN KEY (venue_id) REFERENCES venue(venue_id) ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE checkin
DROP FOREIGN KEY checkin_ibfk_1;

ALTER TABLE checkin
ADD FOREIGN KEY (indi_id) REFERENCES individual(indi_id) ON DELETE CASCADE ON UPDATE CASCADE;


-- get person's checkin history
SELECT checkin.checkin_id, DATE_FORMAT(checkin.checkin_date,'%Y-%m-%d %H:%i:%s') AS checkin_date,venue.name,(checkin.checkin_date between hotspots.start_date and hotspots.end_date) AS isHotspot, venue.number_venue, venue.street, venue.suburb, venue.postcode FROM checkin INNER JOIN  venue ON checkin.venue_id = venue.venue_id INNER JOIN hotspots ON hotspots.venue_id = venue.venue_id WHERE indi_id=?;

--get venue's checkin history
SELECT checkin.checkin_id, DATE_FORMAT(checkin.checkin_date,'%Y-%m-%d %H:%i:%s') AS checkin_date, individual.indi_id, (checkin.checkin_date between hotspots.start_date and hotspots.end_date) AS isHotspot FROM checkin INNER JOIN  venue ON checkin.venue_id = venue.venue_id INNER JOIN hotspots ON hotspots.venue_id = venue.venue_id INNER JOIN individual ON individual.indi_id = checkin.indi_id WHERE venue.venue_id=?;




-- hotspots query--------------------------
INSERT INTO hotspots (venue_id,start_date,timeframe) VALUES (1,NOW(),7);

INSERT INTO hotspots (venue_id,start_date,timeframe) VALUES (3,NOW(),7);
INSERT INTO hotspots (venue_id,start_date,timeframe) VALUES (5,"2021-06-13 00:00",7);
INSERT INTO hotspots (venue_id,start_date,timeframe) VALUES (?,?,?);

INSERT INTO hotspots (venue_id,start_date,timeframe,end_date) VALUES (10,NOW(),7,"2021-06-15 00:00");



SELECT * FROM hotspots;

UPDATE hotspots SET hotspots.end_date = DATE_ADD(hotspots.start_date, INTERVAL hotspots.timeframe DAY);
WHERE hotspots.id=2;

-- extend
UPDATE hotspots SET hotspots.timeframe = hotspots.timeframe+10;
WHERE hotspots.id=3;

DELETE FROM hotspots WHERE end_date = 'NULL';

SELECT * FROM hotspots INNER JOIN venue ON hotspots.venue_id = venue.venue_id;

ALTER TABLE hotspots
ADD end_date DATETIME;


ALTER TABLE hotspots DROP COLUMN timeframe;

SELECT *, FROM hotspots INNER JOIN venue ON hotspots.venue_id = venue.venue_id WHERE hotspots.end_date > NOW();

SELECT * FROM  allHotspots;

SELECT checkin.checkin_date, venue.name, venue.number_venue, venue.street, venue.suburb, venue.postcode, venue.city, venue.state

                        FROM checkin
                        INNER JOIN venue ON checkin.venue_id=venue.venue_id
                        LEFT JOIN hotspots ON hotspots.venue_id=venue.venue_id
                        WHERE checkin.indi_id=6;

DELETE FROM hotspots WHERE id=?;



-- Manager query--------------------
INSERT INTO manager (first_name,last_name, email,password_hash,username,phone) VALUES ('manager1','compay1', 'manager1@example.com', '1234567','manger111','man1111111');

INSERT INTO manager (first_name,last_name,role,address, email,password_hash,username,phone) VALUES ();

SELECT id,first_name,last_name, email,password_hash,username,phone FROM manager WHERE email = ? OR username = ?;

INSERT INTO manager (first_name,last_name,email,password_hash,username,phone,role,DOB,address) VALUES ("aaaa","aaa","aaa","aaa","aaa123","aaa",1,"aaa","aaa");

SELECT id AS manager_id,first_name,last_name, DOB, email,username,phone, venue.name AS venue, venue.venue_id FROM manager LEFT JOIN venue ON manager.id = venue.manager_id;

-- delete manager
DELETE FROM manager WHERE id = ?;


-- update manager
UPDATE manager  SET first_name= "Pink",last_name="Floyd",DOB="1920-01-01",email="pink.floyd@gmail.com",phone="040187564564" WHERE id=13;


-- admin query-----------------------------


INSERT INTO admin (role,employeeID,first_name,last_name,phone,email,password_hash) VALUES (2,?,?,?,?,?,?);


                     SELECT indi_id, role,email,password_hash,username FROM individual
                     UNION
                SELECT id, role, email,password_hash,username FROM manager
                  UNION
                       SELECT  employeeID, role,email,password_hash,username FROM admin;

-- get admin profile
SELECT first_name,last_name,phone FROM admin WHERE employeeID=?;

-- update admin profile
UPDATE admin SET first_name=?,last_name=?,phone=?,email=?,password_hash=? WHERE employeeID =?;

UPDATE admin SET first_name='Edward',last_name='Norton',phone='040277865435',email='en@gmail.com' WHERE employeeID ='111';


