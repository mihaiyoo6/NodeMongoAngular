var express = require('express');
var url = require('url');
var app  = express();
var port = process.env.PORT || 3000;
app.listen(port);
app.get('/image', function(req, res){
	res.sendfile('arch.png',
		{
			maxAge: 1, //24*60*60*1000,
			root: './views/'
		},
		function(err){
			if(err){
				console.log('Error');
			}else{
				console.log("SUCCESS");
			}
		
		});
});