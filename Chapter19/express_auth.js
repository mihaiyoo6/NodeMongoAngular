var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();
var port = process.env.PORT || 3300;
app.listen(port);
app.use(basicAuth(function(user, pass){
	return (user==='testuser' && pass ==='test');
}));
app.get('/', function(req, res){
	res.send("Successful Authentication!");
});