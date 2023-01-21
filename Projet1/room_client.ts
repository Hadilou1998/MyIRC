var socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl');

//var socket = io.connect();

var username: string = process.argv[2];

socket.on('disconnect', function () {
    console.log('utilisateur déconnecté = ' + username);
    //socket.emit('disconnect')
});

socket.on('connect', () => {
    console.log('==================== début du chat ===================')
    socket.emit('onConnected', username);


    socket.on('ConnectedPop', (users) => {
        console.log(users);
    });
})

socket.on('message', (data) => {
    console.log(data);

})

repl.start(
    {
        prompt: '',
        eval: (user_input) => {
            const splitted_input = user_input.split(' ') 
            if (splitted_input[0] == "--join")
                socket.emit('createOrJoin', splitted_input[1]);

            else 
                socket.send({ user_input,  username });
        }
    }
)