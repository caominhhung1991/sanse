const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API file for interacting with MongoDB
const api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', api);
// Send all other requests to the Angular app
// app.get('/**', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build/index.html'));
// });

// Set Port
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
 
server.listen(port, () => {
    console.log(`Running on localhost - :${port}`);
});

module.exports = server;