var express = require('express');
var url = require('url');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.get('/google', function(req, res){
	res.redirect('http://google.com');
});
app.get('/first', function(req, res){
	res.redirect('/second');
});
app.get('/second', function(req, res){
	res.send("Response from second");
});
app.get('/level/A', function(req, res){
	res.redirect("../B");
});
app.get('/level/B', function(req, res){
	res.send("Response from level B");
});