//var socket = require('socket.io-client')('http://localhost:3000');
const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000
//var username: string;
var room = "main";

var users: string[] = [];

io.on('connection', (socket:any) => {
  console.log('new user connected');
  socket.join("jeux");
  const t = io.sockets.adapter.rooms;
  console.log(t);
  //console.log(socket.id, "is connect");
  //socket.broadcast.emit("message", "is connect");

  socket.emit('ConnectedPop', users);

  socket.on('onConnected', (username:string) => {
    console.log('utilisateur connecté = ' + username);
    users.push(username);
    socket.broadcast.emit('message', username + ' vient de vous rejoindre');


  })
    socket.on('createOrJoin', (room:string) => {
      socket.join(room);
      const t = io.sockets.adapter.rooms;
      console.log(t);
    });
    

 socket.on('message', (data:any) => {
      const { cmd, username } = data
      
      console.log(username);
      console.log(data);
      console.log(cmd.split('\n')[0]);
      socket.broadcast.emit('message', username + ': ' + cmd.split('\n')[0]) 
        
      //io.to('socket#id').emit('message');
   
    })
})
  //socket.on('room', (room)=> {
  //socket.join(room);
  // })
 
  
  

  http.listen(port, () => console.log(`server listening on port : ${port}`));