var express = require('express');
var app = express();
app.get('/', express.static('./static'),{maxAge:60*60*1000});
app.get('/images', express.static('../images'));
var port = process.env.PORT || 3000;
app.listen(port);