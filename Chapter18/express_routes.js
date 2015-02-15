var express = require('express');
var url = require('url');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.get('/', function(req, res){
	res.send("Get Index");
});

app. get('/find', function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	response = "Finding Book: Autor: "+ query.autor + ' Title: '+ query.title;
	console.log('\n Query url: '+ req.originalUrl);
	console.log(response);
	res.send(response);
});

app.get(/^\/book\/(w+):(w+)?$/, function(req, res){
	var response = 'Get Book: Chapert: ' + req.params[0] + ' Page: ' + req.params[1];
	console.log('\n Regex Url'+ req.originalUrl);
	console.log(response);
	res.send(response);
});

app.get('/user/:userid', function(req, res){
	var response = 'Get User: ' + req.param('userid');
	console.log('\n Param URl: '+ req.originalUrl);
	console.log(response);
	res.send(response);
});

app.param('userid', function(req, res, next, value){
	console.log("\n Request received with userid "+value);
	next();
});
