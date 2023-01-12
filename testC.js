"use strict";
exports.__esModule = true;
var socket_io_client_1 = require("socket.io-client");
var readline = require("readline");
var lib_1 = require("./lib");
var mysql = require("mysql");
var port = 8000;
var db = mysql.createConnection({
    host: "localhost",
    user: "myirc",
    password: "myirc",
    database: "MyIRC"
});
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var commande = ['--login', '--pass', '--register', '--help', '--edit', '--exit', '--quit'];
var socket = (0, socket_io_client_1.io)("ws://localhost:3000");
console.log('Welcome!!');
console.log("To login: '--login <login>'");
console.log("To register: '--register <login> <password>'");
socket.on("connect", function () {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
rl.on('line', function (input) {
    var cmd = input.split(" ")[0];
    // const data = input.split(" ")[1];
    var data = input.substring(cmd.length + 1);
    // on verifie si la premeiere partie du input correspond à une commande 
    if (lib_1["default"].checkArray(commande, cmd)) {
        socket.emit(cmd, ("".concat(data)));
        // si la premiere partie n'est pas une commande 
        // mais que ca commence pas -- alors il s'agit d'une commande incorrect
    }
    else if (input.substring(0, 2) === '--') {
        console.log('commande invalide');
    }
    else {
        // si le message n'est pas une commande alors c'est un message normal 
        socket.emit("messageToServer", ("".concat(input)));
    }
});
// Messages recus du serveur 
socket.on("messageToClient", function (arg) {
    console.log(arg);
});
// lister toutes les commandes possibles 
socket.on("help", function (list) {
    // console.log('WARNING: * specify orders reserved for admin');
    console.log(list);
});
// Lors de la connexion on vérifie si l'utilisateur existe
// socket.on("login", (log) =>{
//   // on verifie que l'utilisateur existe
//   if(log === 'this user does not exist'){
//     console.log('this user does not exist');
//   }
// });
// verifier le statut de l'utilisateur
socket.on("userConnect", function (status) {
    if (status === 'user_connect') {
        console.log('user already connected');
    }
    else {
        console.log('Enter your password: --pass <password>');
    }
});
// indidaction sur la validité du mdp 
socket.on("mdp", function (arg) {
    if (arg === 'mdp_correct') {
        // console.log(arg);
        console.log('mdp correct');
    }
    else {
        console.log('mdp incorrect');
    }
});
// deconnection d'un utilisateur 
socket.on("userDisconnect", function () {
    console.log('successfully disconnected');
});
// reg = register. Validité de la commande 
// socket.on("cmdUser", (reg) =>{
//   // console.log(reg);
//   if(reg === 'command_incorrect'){
//     console.log('invalid syntax : maybe check the spaces in your syntax');
//     console.log('--help for help');
//   } else {
//     console.log(reg);
//   }
// });
socket.on("cmdUser", function (msg) {
    switch (msg) {
        case 'command_incorrect':
            console.log('invalid syntax : maybe check the spaces in your syntax');
            console.log('--help for help');
            break;
        case 'successfully registered': console.log(msg);
    }
});
socket.on("userExist", function (msg) {
    switch (msg) {
        // lors de la connection on verifie que le user existe 
        case 'this user does not exist':
            console.log(msg);
            break;
        // signaler que l'utilisateur qu'on veut ajouter existe deja dans la bdd
        case 'User already exist': console.log(msg);
    }
});
// ce que seul admin peut faire 
socket.on("admin", function (msg) {
    switch (msg) {
        case 'quit':
            process.exit(0);
            break;
        case 'no_quit':
            console.log('only admin can close the application');
            break;
        case 'Only admin can edit':
            console.log(msg);
            break;
        case 'successfully modified': console.log(msg);
    }
});
