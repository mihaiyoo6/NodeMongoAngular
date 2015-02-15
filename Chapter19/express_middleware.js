var express = require('express');
var app = express();
function queryRemover(req, res, next){
	console.log("\n BEfore URL:");
	console.log(req.url);
	req.url = req.url.split('?')[0];
	console.log("\n After URL");
	console.log(req.url);
	next();
}

app.use(queryRemover);
app.get('/no/query', function(req, res){
	res.send('test');
});
var port = process.env.PORT || 3300;
app.listen(port);