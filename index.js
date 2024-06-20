const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: 'sample_db',
    password: 'password',
    port: process.env.DB_PORT || 5432,
});

app.use(express.json());

// Endpoint to get all rows
app.get('/data', async (req, res) => {
    const result = await pool.query('SELECT * FROM sample_table');
    res.json(result.rows);
});

// Endpoint to get the n-th row
app.get('/data/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const result = await pool.query('SELECT * FROM sample_table WHERE id = $1', [id]);
    res.json(result.rows[0]);
});

// Endpoint to get the average of the integer field
app.get('/average', async (req, res) => {
    const result = await pool.query('SELECT AVG(integer_field) FROM sample_table');
    res.json(result.rows[0]);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
