const crypto = require("crypto");
const url = require("url");
const pool = require("./db");
const table =  process.env.NODE_ENV === "dev" ? "shorts" : "shorts_test";

async function encode(url) {
    //check if string entered is a valid URL
    url = new URL(url);

    if (url.host === "short.ly") {
        throw new Error("[Invalid Input] the URL is invalid: " + url);
        return;
    }

    //check if url haven't been encrypted already
    var key = await pool.query(`SELECT * FROM ${table} WHERE original_url='${url}'`);
    if (key.rowCount) {
        return key.rows[0];

    } else {
        var usable = false;

        while (!usable) {
            var newKey = "http://short.ly/" + crypto.randomBytes(6).toString('base64').slice(0, 6);
            //check if generated key can be used
            inDb = await pool.query(`SELECT * FROM ${table} WHERE short_encoding='${newKey}'`);
            usable = inDb.rowCount == 0;
        }

        var newKey = await pool.query(
            `INSERT INTO ${table} (original_url, short_encoding, insertion_time) 
            VALUES ('${url}','${newKey}',CURRENT_TIMESTAMP(1))
            RETURNING * `
        );

        return newKey.rows[0];
    }

}

async function decode(url) {
    //check if string entered is a valid URL
    url = new URL(url);

    inDb = await pool.query(`SELECT * FROM ${table} WHERE short_encoding='${url}'`);
    if (inDb.rowCount) {
        return inDb.rows[0];
    } else {
        throw new Error("[Invalid Input] the URL you have entered was not encoded before: " + url);
        return;
    }
}

module.exports = { encode, decode };
