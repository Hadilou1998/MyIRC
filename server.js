"use strict";
exports.__esModule = true;
var port = 3000;
var express = require('express');
var app = express();
var server = app.listen(port, function () {
    console.log("server listening on port: ".concat(port));
});
var io = require('socket.io')(server);
io.on("connection", function (socket) {
    console.log("connected");
    socket.on("message", function (evt) {
        console.log(evt);
        socket.broadcast.emit("message", evt);
    });
});
io.on("deconnection", function (evt) {
    console.log("disconnected");
});
