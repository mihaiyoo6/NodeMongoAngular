var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;
var port1 = process.env.PORT || 3001;
var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
  };
http.createServer(app).listen(port);
https.createServer(options, app).listen(port1);
app.get('/', function(req, res){
  res.send('Hello from Express');
});