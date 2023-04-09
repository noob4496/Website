const path = require("path");
const express = require('express');
const fileRouter = express.Router();

fileRouter.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../pages/obfuscation-tool.html"));
});

module.exports = fileRouter;