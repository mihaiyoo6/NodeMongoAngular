var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('server.pem'),
  cert: fs.readFileSync('server.crt')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);