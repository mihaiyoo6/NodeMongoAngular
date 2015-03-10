var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	db = mongoose.connect('mongodb://lcalhost/coments'):
require('./models/comments_model.js');
require('./models/photo_model.js');
require('./models/page_model.js');
var app = express();
var port = process.env.PORT || 3300;
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser());
require('./comment_routes')(app);
app.listen(port);