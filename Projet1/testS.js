"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
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
// tableau des utilisateurs connectés
var userConnect = [];
console.log('Serveur démarré');
var io = new socket_io_1.Server(3000);
io.on("connection", function (Socket) {
    // Socket.emit("hello", "world");
    // console.log(Socket.connected); // true
    console.log(Socket.id);
    Socket.on("messageToServer", function (arg) {
        console.log(arg);
    });
    // on envoi la liste des commandes 
    Socket.on('--help', function () {
        Socket.emit("help", ('WARNING: * specify orders reserved for admin'));
        Socket.emit("help", ('--login <login>                   --------------> to log on'));
        Socket.emit("help", ('--register <login> <password>     --------------> to register'));
        Socket.emit("help", ('--exit                            --------------> to disconnect user'));
        Socket.emit("help", ('--edit <user_name> <new_pass> (**)--------------> to edit passeword of user'));
        Socket.emit("help", ('--quit(**)                        --------------> to close application'));
    });
    // on vérifie qu'il le bon nombre d'argument à la commande 
    Socket.on('--register', function (identifiant) {
        var id = identifiant.split(" ");
        if (id.length !== 2) {
            Socket.emit("cmdUser", ('command_incorrect'));
        }
        else {
            var id_1 = identifiant.split(" ");
            var login_1 = id_1[0];
            var password_1 = id_1[1];
            // on verifie d'abord si l'utilisateur existe ou pas 
            db.query("select count(*) as nb from users where name ='".concat(login_1, "'"), function (err, resultat) {
                if (err) {
                    throw err;
                }
                else {
                    // console.log(resultat[0].password);
                    if (resultat[0].nb == 1) {
                        Socket.emit("userExist", ('User already exist'));
                    }
                    else {
                        // si l'utilisateur n'existe pas on peut le rajouter 
                        db.query("insert into users(name, password, id_room) values('".concat(login_1, "', '").concat(password_1, "', 1)"), function (err) {
                            if (err) {
                                throw err;
                            }
                            else {
                                Socket.emit("cmdUser", ('successfully registered'));
                            }
                        });
                    }
                }
            });
            // Socket.emit("newUser",('command_correct'));
        }
    });
    // vérifier que l'utilisateur existe 
    Socket.on('--login', function (nom) {
        db.query("select count(*) as nb from users where name ='".concat(nom, "' "), function (err, resultat) {
            if (err) {
                throw err;
            }
            else {
                if (resultat[0].nb == 1) {
                    Socket.emit("userExist", ('user_exist'));
                    // On verifie si l'utilisateur est dans la liste de ceux déjà connecté
                    if (lib_1["default"].checkArray(userConnect, nom)) {
                        Socket.emit("userConnect", ('user_connect'));
                    }
                    else {
                        Socket.emit("userConnect", ('user_no_connect'));
                        // lib.addToArray(userConnect, nom);
                    }
                }
                else {
                    Socket.emit("userExist", ('this user does not exist'));
                    // console.log('this user does not exist');
                }
            }
        });
        // verifier si mdp correct 
        Socket.on('--pass', function (mdp) {
            db.query("select password  from users where name = '".concat(nom, "' "), function (err, password) {
                if (err) {
                    throw err;
                }
                else {
                    if (password[0].password === mdp) {
                        // Socket.emit("mdp",('mdp_correct'));
                        // si il iniste avec un utilisateur deja connecté
                        if (lib_1["default"].checkArray(userConnect, nom)) {
                            console.log('$$');
                            lib_1["default"].printArray(userConnect);
                            console.log('$$');
                            // on vérifie encore si l'utilisateur existe deja
                            Socket.emit("userConnect", ('user_connect'));
                        }
                        else {
                            lib_1["default"].addToArray(userConnect, nom);
                            Socket.emit("mdp", ('mdp_correct'));
                            console.log('--');
                            lib_1["default"].printArray(userConnect);
                            console.log('--');
                        }
                        // Socket.emit("mdp",('mdp_correct'));
                    }
                    else {
                        Socket.emit("mdp", ('mdp_incorrect'));
                    }
                }
            });
        });
        Socket.on('--edit', function (value) {
            if (nom === 'admin') {
                var val = value.split(" ");
                if (val.length !== 2) {
                    Socket.emit("cmdUser", ('command_incorrect'));
                }
                else {
                    // const id = identifiant.split(" ");
                    var userName_1 = val[0];
                    var newPassword_1 = val[1];
                    db.query("select count(*) as nb from users where name ='".concat(userName_1, "'"), function (err, resultat) {
                        if (err) {
                            throw err;
                        }
                        else {
                            if (resultat[0].nb == 1) {
                                db.query("update users set password = '".concat(newPassword_1, "' where name = '").concat(userName_1, "'"), function (err) {
                                    if (err) {
                                        throw err;
                                    }
                                    else {
                                        Socket.emit("admin", ('successfully modified'));
                                    }
                                });
                                // console.log('ok il est la');
                            }
                            else {
                                Socket.emit("userExist", ('this user does not exist'));
                            }
                        }
                    });
                }
                // Socket.emit("admin",('successfully modified'));
            }
            else {
                Socket.emit("admin", ('Only admin can edit'));
            }
        });
        Socket.on('--quit', function () {
            if (nom === 'admin') {
                Socket.emit("admin", ('quit'));
                process.exit(0);
            }
            else {
                Socket.emit("admin", ('no_quit'));
            }
        });
        Socket.on('--exit', function () {
            lib_1["default"].removeToArray(userConnect, nom);
            Socket.emit("userDisconnect", (''));
            console.log('^^');
            lib_1["default"].printArray(userConnect);
            console.log('^^');
        });
    });
    rl.on('line', function (input) {
        Socket.emit("messageToClient", ("".concat(input)));
    });
});
