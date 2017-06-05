// https://nodejs.org/api/events.html

const EventEmitter = require('events');

class MyServer extends EventEmitter {}
var myServer = new MyServer();

myServer.on('data', (data) => {
  console.log(`data received: ${data}`);
});

myServer.on('ping', () => {
  console.log('pong');
});

myServer.on('finish', () => {
  console.log("terminating");
  process.exit(0);
});

myServer.emit('data', 'hello server');
myServer.emit('ping');
myServer.emit('finish');