
CREATE TABLE shorts (
    id SERIAL PRIMARY KEY,
    original_url TEXT UNIQUE NOT NULL,
    short_encoding VARCHAR(50) UNIQUE NOT NULL,
    insertion_time timestamp
);
CREATE TABLE shorts_test (
    id SERIAL PRIMARY KEY,
    original_url TEXT UNIQUE NOT NULL,
    short_encoding VARCHAR(50) UNIQUE NOT NULL,
    insertion_time timestamp
);