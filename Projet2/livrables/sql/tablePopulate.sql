INSERT INTO phones (area_code, number) VALUES
('+33', 781958109),
('+33', 652697098),
('+33', 109876540),
('+245', 781958109);

INSERT INTO users (last_name, first_name, email, password, telephoneId, isAuthorized) VALUES 
('Hu', 'Florence', 'hu_f@etna-alternance.net', 'bubble tea', 2, 1),
('Sacko', 'Mahamadou', 'sacko.doums@gmail.com', 'bamako669', 1, 1),
('Toto', 'Tata', 'toto_t@etna-alternance.net', 'tutu?', 4, 0),
('Perriau', 'Thomas', 'perria_t@etna-alternance.net', 'moustache', 3, 0);

INSERT INTO stores (name, address, city, postal_code, description) VALUES ('Paris13', '12 Avenue de la République', 'PARIS', 75113, 'Le magasin dans le 13e');

INSERT INTO commands (userId, storeId, status, when_collect) VALUES 
(1, 1, 'In Progress', TIMESTAMP('2022-11-10')),
(1, 1, 'In Progress', TIMESTAMP('2022-11-12')),
(2, 1, 'Waiting For Pick-up', TIMESTAMP('2022-11-20')),
(3, 1, 'Picked-up', TIMESTAMP('2022-11-20'));

INSERT INTO poppings (image_url, name, description, price, stock) VALUES 
('perles/tapioca.jpg', 'classique', 'On ne peut pas se tromper avec les classiques', 2.23, 50),
('perles/fraise.jpg', 'fraise', 'Un peu de tagada dans vos teas', 3.35, 50),
('perles/peche.jpg', 'peche', 'Gardez la pêche', 3.35, 50),
('perles/lychee.jpg', 'lychee', 'Lèchez le lychee', 3.35, 50);

INSERT INTO milks (name, description, price, stock) VALUES 
('Lait de vache', 'Meuh meuh meuh', 2, 50),
('Lait de soja', 'Je vais acheter le dernier pokemon,', 2, 50),
('Lait de amande', 'Excès de vitesse', 2, 50);

INSERT INTO purees (name, description, price, stock) VALUES
('Puree fruits-the', 'The vert', 3.45, 1), 
('Mangue', 'Mango', 3, 50),
('Goyave', 'Cannette pchitt ouverture', 3, 60),
('Cough sirup', 'On surf sur la trend', 4.80, 30);

INSERT INTO teas(image_url, name, description, price, stock) VALUES 
('tea/noir.jpg', 'Thé noir', 'Thé de Ceylan que la quali', 3, 40),
('tea/blanc.jpg', 'Thé blanc', 'Franchement que pour la trend', 5, 40),
('tea/vert.jpg', 'Thé vert', 'Thé du maroc, entre traditionalisme et modernité', 3, 40),
('tea/matcha.jpg', 'Thé matcha', 'Comme un japonais au pérou', 4, 40);

INSERT INTO recipes (name, description, teaId, poppingId, milkId, pureeId, price) VALUES 
('soupe', 'voici ma préparation', 1, 1, 1, 1, 10),
('exam', 'il y a du progrès', 1, 1, 1, 1, 20),
('result', 'je viens de finir', 1, 1, 1, 1, 20);

INSERT INTO command_products(commandId, teaId, poppingId, milkId, pureeId, qteSucre, price) VALUES 
(1, 1, 1, 1, 1, 10, 10),
(2, 2, 2, 1, 1, 2, 10),
(1, 1, 2, 2, 2, 4, 10);