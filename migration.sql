DROP TABLE IF EXISTS owner, pets;

CREATE TABLE owner (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    phone_number TEXT NOT NULL
);

CREATE TABLE pets (
    id SERIAL,
    owner_id INTEGER NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES owner(id) ON DELETE CASCADE,
    name TEXT,
    age INTEGER,
    type TEXT,
    color TEXT
);