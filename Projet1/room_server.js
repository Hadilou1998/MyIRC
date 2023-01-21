/*import { log } from "console";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const rooms = {};
const port = 3000;

io.on('connection', function(socket)
{
    // Creating a lot of rooms
    socket.on('create-room', function (main)
    {
        // joining rooms
        socket.join('main');
        socket.join('jeux');
        socket.join('sport');
        socket.join('divers');

        // leaving jeux
        socket.leave('jeux');

        // get rooms I am connected to
        const myRooms = socket.rooms();
        console.log(myRooms);

        // send data to main
        socket.room('main').send('Welcome Everyone!');

        // send data to main & divers
        socket.room('main divers').send('Welcome Everyone!');

        // get clients connected to main
        socket.room('main').clients(function(clients)
        {
            console.log(clients);
        });

        // leaving all rooms
        socket.leaveAll();

        // join rooms on request
        socket.on('message', function(main)
        {
            socket.join(main);
        });
    });
});

server.listen(port, () => console.log(`listening on port ${port}`));*/
//var socket = require('socket.io-client')('http://localhost:3000');
var http = require('http').createServer();
var io = require('socket.io')(http);
var port = 3000;
//var username: string;
var room = "main";
var users = [];
io.on('connection', function (socket) {
    console.log('new user connected');
    socket.join("jeux");
    var t = io.sockets.adapter.rooms;
    console.log(t);
    //console.log(socket.id, "is connect");
    //socket.broadcast.emit("message", "is connect");
    socket.emit('ConnectedPop', users);
    socket.on('onConnected', function (username) {
        console.log('utilisateur connecté = ' + username);
        users.push(username);
        socket.broadcast.emit('message', username + ' vient de vous rejoindre');
    });
    socket.on('createOrJoin', function (room) {
        socket.join(room);
        var t = io.sockets.adapter.rooms;
        console.log(t);
    });
    socket.on('message', function (data) {
        var cmd = data.cmd, username = data.username;
        console.log(username);
        console.log(data);
        console.log(cmd.split('\n')[0]);
        socket.broadcast.emit('message', username + ': ' + cmd.split('\n')[0]);
        //io.to('socket#id').emit('message');
    });
});
//socket.on('room', (room)=> {
//socket.join(room);
// })
http.listen(port, function () { return console.log("server listening on port : ".concat(port)); });
