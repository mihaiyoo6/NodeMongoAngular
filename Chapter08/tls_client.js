var tls = require('tls'),
    fs = require('fs');
var options = {
    host: 'localhost',
  key: fs.readFileSync('server.pem'),
  cert: fs.readFileSync('server.crt'),
  ca: fs.readFileSync('server.crt')
};
var conn = tls.connect(8000, options, function() {
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError);
  }
    console.log();
});
conn.on("data", function (data) {
  console.log(data.toString());
  conn.end();
});