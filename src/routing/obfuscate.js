const path = require("path");
const express = require('express');
const fileRouter = express.Router();

const { obfuscate } = require('../server/obfuscation.js')

fileRouter.post('/', function (req, res) {
    res.send(obfuscate(req.body.text))
});

module.exports = fileRouter;