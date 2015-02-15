var tls = require('tls'),
    fs = require('fs'),
    msg = "test";
var options = {
  host: 'localhost',
  key: fs.readFileSync('server.pem'),
  cert: fs.readFileSync('server.crt'),
  ca: fs.readFileSync('server.crt')
};
tls.createServer(options, function (s) {
  s.write(msg+"\n");
  s.pipe(s);
}).listen(8000);