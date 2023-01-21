import { Socket } from "engine.io";
import { Server } from "socket.io";
import * as readline from 'readline';
import lib from './lib';
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

// tableau des utilisateurs connectés
let userConnect = []; 

console.log('Serveur démarré');

const io = new Server(3000);

io.on("connection", (Socket) =>{
    // Socket.emit("hello", "world");
    // console.log(Socket.connected); // true
    console.log(Socket.id);

    Socket.on("messageToServer", (arg) =>{
        console.log(arg);
    });

    // on envoi la liste des commandes 
    Socket.on('--help', () =>{
        Socket.emit("help",('WARNING: * specify orders reserved for admin'));
        Socket.emit("help",('--login <login>                   --------------> to log on'));
        Socket.emit("help",('--register <login> <password>     --------------> to register'));
        Socket.emit("help",('--exit                            --------------> to disconnect user'));
        Socket.emit("help",('--edit <user_name> <new_pass> (**)--------------> to edit passeword of user'));
        Socket.emit("help",('--quit(**)                        --------------> to close application'));
    });

    // on vérifie qu'il le bon nombre d'argument à la commande 
    Socket.on('--register', (identifiant) =>{
        const id = identifiant.split(" ");
        if(id.length !== 2){
            Socket.emit("cmdUser",('command_incorrect'));
        } else {
            const id = identifiant.split(" ");
            const login = id[0];
            const password = id[1];
            // on verifie d'abord si l'utilisateur existe ou pas 
            db.query(`select count(*) as nb from users where name ='${login}'`, function(err, resultat){
                if (err){throw err;
                } else{
                    // console.log(resultat[0].password);
                    if(resultat[0].nb == 1){
                        Socket.emit("userExist",('User already exist'));
                    } else {
                        // si l'utilisateur n'existe pas on peut le rajouter 
                        db.query(`insert into users(name, password, id_room) values('${login}', '${password}', 1)`, function(err){
                            if (err){throw err;
                            } else{
                                Socket.emit("cmdUser",('successfully registered'));
                            }      
                        });
                    }
                }      
            });


            // Socket.emit("newUser",('command_correct'));
        }
    });

    // vérifier que l'utilisateur existe 
    Socket.on('--login', (nom) =>{
        db.query(`select count(*) as nb from users where name ='${nom}' `, function(err, resultat){
            if (err){throw err;
            } else{
                if(resultat[0].nb == 1){
                    Socket.emit("userExist",('user_exist'));
                    // On verifie si l'utilisateur est dans la liste de ceux déjà connecté
                    if(lib.checkArray(userConnect, nom)){
                        Socket.emit("userConnect",('user_connect'));
                    } else {
                        Socket.emit("userConnect",('user_no_connect'));
                        // lib.addToArray(userConnect, nom);
                    }
                } else {
                    Socket.emit("userExist",('this user does not exist'));
                    // console.log('this user does not exist');
                }
            }      
        });

        // verifier si mdp correct 
        Socket.on('--pass', (mdp) =>{
            db.query(`select password  from users where name = '${nom}' `, function(err, password){
                if (err){throw err;
                } else{
                    if(password[0].password === mdp){
                        // Socket.emit("mdp",('mdp_correct'));
                        // si il iniste avec un utilisateur deja connecté
                        if(lib.checkArray(userConnect, nom)){
                            console.log('$$');
                            lib.printArray(userConnect);
                            console.log('$$');
                            // on vérifie encore si l'utilisateur existe deja
                            Socket.emit("userConnect",('user_connect'));
                        } else {
                            lib.addToArray(userConnect, nom);
                            Socket.emit("mdp",('mdp_correct'));
                            console.log('--');
                            lib.printArray(userConnect);
                            console.log('--');
                        }
                        // Socket.emit("mdp",('mdp_correct'));
                    } else {
                        Socket.emit("mdp",('mdp_incorrect'));
                    }
                }      
            });
            
        });

        Socket.on('--edit', (value) =>{
            if(nom === 'admin'){
                const val = value.split(" ");
                if(val.length !== 2){
                    Socket.emit("cmdUser",('command_incorrect'));
                } else {
                    // const id = identifiant.split(" ");
                    const userName = val[0];
                    const newPassword = val[1];

                    db.query(`select count(*) as nb from users where name ='${userName}'`, function(err, resultat){
                        if (err){throw err;
                        } else{
                            if(resultat[0].nb == 1){
                                db.query(`update users set password = '${newPassword}' where name = '${userName}'`, function(err){
                                    if (err){throw err;
                                    } else{
                                        Socket.emit("admin",('successfully modified'));
                                    }      
                                });
                                // console.log('ok il est la');
                            } else {
                                Socket.emit("userExist",('this user does not exist'));
                    
                            }
                        }      
                    });
                }
                // Socket.emit("admin",('successfully modified'));
            } else {
                Socket.emit("admin",('Only admin can edit'));
            }
        });

        Socket.on('--quit', () =>{
            if(nom === 'admin'){
                Socket.emit("admin",('quit'));
                process.exit(0);
            } else {
                Socket.emit("admin",('no_quit'));
            }
        });

        Socket.on('--exit', () =>{
            lib.removeToArray(userConnect, nom);
            Socket.emit("userDisconnect",(''));
            console.log('^^');
            lib.printArray(userConnect);
            console.log('^^');
        });

    });

    rl.on('line', (input) => {
        Socket.emit("messageToClient",(`${input}`));
      });
      
});
