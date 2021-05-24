const express = require("express");
const {encode, decode} = require("./encode");
const app = express();

app.use(express.json());

app.get("/encode", async(req, res) => {
    try {
        const { url } = req.body;
        const encoding = await encode(url);
        return res.status(200).json({
            status: 200,
            headers: req.headers,
            response: {message: "encoding successfull" , encoding, request: req.body},
            
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            headers: req.headers,
            response: {error: err.toString(), request: req.body}
        });
    } 
});

app.get("/decode", async(req, res) => {

    try {
        const { url } = req.body;
        const decoding = await decode(url);

        return res.status(200).json({
            status: 200,
            headers: req.headers,
            response: {message: "decoding successfull" , decoding, request: req.body},
        });

    } catch (err) {
        return res.status(500).json({
            status: 500,
            headers: req.headers,
            response: {error: err.toString(), request: req.body}
        });
    }

});

module.exports = app