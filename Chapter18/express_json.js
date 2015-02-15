var express = require('express');
var url = require('url');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.get('/json', function(req, res){
	app.set('json spaces', 4);
	res.json({name:"smithsonian", build: '1846', items: '137M',
				centers: ['art', 'astrophusics', 'natural history', 'planetary', 'biology', 'space', 'zoo']});
});
app.get('/error', function(req, res){
	res.json(500, {status: false, message:'Internal Server Error'});
});
app.get('/jsonp', function(req, res){
	app.set('jsonp callbak name', 'cb');
	res.jsonp({name:"smithsonian", build: '1846', items: '137M',
				centers: ['art', 'astrophusics', 'natural history', 'planetary', 'biology', 'space', 'zoo']});
});