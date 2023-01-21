import { log } from "console";
import { Server, Socket } from "socket.io";

const port = 3000;
const express = require('express');
const app = express();
const server = app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})
const io = require('socket.io')(server);

io.on("connection", (socket: Socket) => {
    console.log("connected")
    socket.on("message", (evt) => {
        console.log(evt)
        socket.broadcast.emit("message", evt)
    })
});

io.on("deconnection", (evt) => {
    console.log("disconnected")
});