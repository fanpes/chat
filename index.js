var app = require('express')();
app.use(require('express').static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port=3000;
io.on('connection', function(socket){
  console.log('a user connected');
 socket.on('chat message', function(msg){
    console.log('message: ' + msg);
        io.emit('chat message', msg);

  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
http.listen(port, function(){
  console.log('listening on *:3000');
});