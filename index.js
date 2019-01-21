const express = require('express');
const app = express();
const hello = require('./hello');
const listening = require('./listeningHandler');

const PORT = 3000;
app.get('/', hello);
app.listen(process.env.PORT || PORT, listening(console.log, PORT));

module.exports = app;

