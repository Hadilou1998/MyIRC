/*CREATE TABLE room (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(79) NOT NULL,
   PRIMARY KEY (id)
);


CREATE TABLE users (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(79) NOT NULL,
  password varchar(79) NOT NULL,
  id_room int NOT NULL,
  PRIMARY KEY (id),
   FOREIGN KEY (id_room) REFERENCES room(id)

);*/

INSERT INTO room VALUES
(NULL, "jeux"   ),
(NULL, "sport"  ),
(NULL, "divers" );

INSERT INTO users VALUES
(NULL , "abdou"     , "abdou_chelou"      , 1),
(NULL , "bruno"     , "bruno_chelou"      , 1),
(NULL , "cassandre" , "cassandre_chelou"  , 2),
(NULL , "dounia"    , "dounia_chelou"     , 2),
(NULL , "eliot"     , "eliot_chelou"      , 3),
(NULL , "fouad"     , "fouad_chelou"      , 3),
(NULL , "garou"     , "garou_chelou"      , 4),
(NULL , "hadil"     , "hadil_chelou"      , 4);