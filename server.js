﻿var express = require('express');
var app = express();
var port = process.env.port || 1337;

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
});
