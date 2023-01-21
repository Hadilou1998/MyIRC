const socket = require("socket.io-client")("http://localhost:3000");
    var repl = require("repl")
    var chalk = require("chalk");

    socket.on("disconnect", function() 
    {
        socket.emit("disconnect")
    });

    socket.on("connect", () => 
    {
        console.log(chalk.red("=== start chatting ==="))
    });

    socket.on("message", (data) => 
    {
        const { cmd, username } = data
        console.log(chalk.red(username + ": " + cmd.split("\n")[0]))
    });

    repl.start({
        prompt: "",
        eval: (cmd) => {
            socket.send(cmd)
        }
    });