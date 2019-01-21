const express = require('express');
const app = express();
const hello = require('./hello');
const listen = require('./listeningHandler');

const PORT = 3000;
let server = {};

server.start = () => {
  app.get('/', hello);
  app.listen(PORT, listen(console.log, PORT));
};
server.start();
module.exports = server;

