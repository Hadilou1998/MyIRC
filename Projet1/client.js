var socket = require("socket.io-client")("http://localhost:3000");
var repl = require("repl");
var chalk = require("chalk");
socket.on("disconnect", function () {
    socket.emit("disconnect");
});
socket.on("connect", function () {
    console.log(chalk.red("=== start chatting ==="));
});
socket.on("message", function (data) {
    var cmd = data.cmd, username = data.username;
    console.log(chalk.red(username + ": " + cmd.split("\n")[0]));
});
repl.start({
    prompt: "",
    eval: function (cmd) {
        socket.send(cmd);
    }
});
