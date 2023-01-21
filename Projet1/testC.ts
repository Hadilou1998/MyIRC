import { io } from "socket.io-client";
import * as readline from 'readline';
import lib from './lib';
import { register } from "ts-node";

const mysql = require("mysql");
const port: number = 8000;

const db = mysql.createConnection({
    host    : "localhost",
    user    : "myirc",
    password: "myirc",  
    database: "MyIRC"
});

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let commande = ['--login', '--pass', '--register', '--help', '--edit', '--exit', '--quit'];

const socket = io("ws://localhost:3000");

console.log('Welcome!!');
console.log("To login: '--login <login>'");
console.log("To register: '--register <login> <password>'");

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

rl.on('line', (input) => {

  const cmd = input.split(" ")[0];
  // const data = input.split(" ")[1];
  const data = input.substring(cmd.length + 1);

  // on verifie si la premeiere partie du input correspond à une commande 
  if (lib.checkArray(commande, cmd)){
    socket.emit(cmd,(`${data}`)); 

    // si la premiere partie n'est pas une commande 
    // mais que ca commence pas -- alors il s'agit d'une commande incorrect
  } else if (input.substring(0, 2) === '--'){
    console.log('commande invalide');

  } else {
    // si le message n'est pas une commande alors c'est un message normal 
    socket.emit("messageToServer",(`${input}`));
  }

});

// Messages recus du serveur 
socket.on("messageToClient", (arg) =>{
  console.log(arg);
});

// lister toutes les commandes possibles 
socket.on("help", (list) =>{
  // console.log('WARNING: * specify orders reserved for admin');
  console.log(list);
});

// verifier le statut de l'utilisateur
socket.on("userConnect", (status) =>{
  if(status === 'user_connect'){
    console.log('user already connected');
  } else {
    console.log('Enter your password: --pass <password>');
  }
});

// indidaction sur la validité du mdp 
socket.on("mdp", (arg) =>{
  if(arg === 'mdp_correct'){
    // console.log(arg);
    console.log('mdp correct');
  } else {
    console.log('mdp incorrect');
  }
});

// deconnection d'un utilisateur 
socket.on("userDisconnect", () =>{
    console.log('successfully disconnected');
});

socket.on("cmdUser", (msg) =>{
  switch(msg){
    case 'command_incorrect' : 
    console.log('invalid syntax : maybe check the spaces in your syntax');
    console.log('--help for help');
    break;
    case 'successfully registered': console.log(msg);
  }
});

socket.on("userExist", (msg) =>{
  switch(msg){
    // lors de la connection on verifie que le user existe 
    case 'this user does not exist': console.log(msg);
    break;
    // signaler que l'utilisateur qu'on veut ajouter existe deja dans la bdd
    case 'User already exist': console.log(msg);
  }
})

// ce que seul admin peut faire 
socket.on("admin", (msg) =>{
  switch(msg){
    case 'quit': process.exit(0);
    break;
    case 'no_quit': console.log('only admin can close the application');
    break;
    case 'Only admin can edit': console.log(msg);
    break;
    case 'successfully modified': console.log(msg);
  }
});