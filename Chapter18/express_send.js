var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.get('/', function(req, res){
	var response = '<html><head><title>SimplsendC</title></head><body>Hello From Express</body></html>';
	res.status(200);
	res.set({'Content-Type': 'text/html',
'Content-Length': response.length
			});
	res.send(response);
	console.log('Response FInished '+ res.finished);
	console.log('\n Headers Send: ');
	console.log(res.headersSent);
});
app.get('/error', function(req, res){
	res.status(400);
	res.send('THis is a bag request');
})