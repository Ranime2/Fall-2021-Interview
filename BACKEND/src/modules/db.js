const Pool = require("pg").Pool;
require('dotenv').config();
console.log
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

module.exports = pool;
