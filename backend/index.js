require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const port = process.env.PORT || 5000;
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use((req, res, next) => {
    res.send("hola");
    res.status(200);
});

server.listen(port, () => {
    console.log(`Server is running on ${`http://localhost:${port}`}`);
});