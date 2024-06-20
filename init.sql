CREATE TABLE IF NOT EXISTS sample_table (
    id SERIAL PRIMARY KEY,
    text_field TEXT,
    integer_field INTEGER
);

INSERT INTO sample_table (text_field, integer_field) VALUES
('example1', 10),
('example2', 20),
('example3', 30);
