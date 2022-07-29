DELETE FROM owner;
DELETE FROM pets;

INSERT INTO owner (name, address, phone_number) VALUES ('Alex', '123 Monsters cir', '123-456-7891');
INSERT INTO owner (name, address, phone_number) VALUES ('Edward', '456 Poopoo ave', '719-456-7890');
INSERT INTO owner (name, address, phone_number) VALUES ('Matt', '789 Sudden St', '321-876-6741');
INSERT INTO owner (name, address, phone_number) VALUES ('Zach', '987 Breakfast Av', '910-334-0909');
INSERT INTO owner (name, address, phone_number) VALUES ('Martha', '654 Peppers dr', '224-776-0000');
INSERT INTO owner (name, address, phone_number) VALUES ('Justin', '321 poptart dr', '765-345-0192');
INSERT INTO owner (name, address, phone_number) VALUES ('Lisa', '135 Mookie st', '567-293-9076');

INSERT INTO pets (owner_id, name, age, type, color) VALUES (1, 'Rusty', 3, 'Dog', 'Black');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (1, 'Pickles', 1, 'Cat', 'Black');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (2, 'Noodle', 5, 'Bird', 'Blue');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (3, 'Rice', 10, 'Chicken', 'White');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (4, 'Cerbures', 8, 'Dog', 'Grey');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (5, 'Fenway', 4, 'Dog', 'Brown');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (6, 'Flash', 6, 'Turtle', 'Green');
INSERT INTO pets (owner_id, name, age, type, color) VALUES (7, 'Garfield', 2, 'Cat', 'Orange');


