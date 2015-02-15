var express = require('express'),
    jade = require('jade'),
    ejs = require('ejs');
var app = express();
var port = process.env.PORT || 3000;
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', jade.__express);
app.engine('html', ejs.renderFile);
app.listen(port);
app.locals.uname = "Brad";
app.locals.vehicle = "Jeep";
app.locals.terrain = "Mountains";
app.locals.climate = "Desert";
app.locals.location = "Unknown";
app.get('/jade', function (req, res) {
  res.render('user_jade');
});
app.get('/ejs', function (req, res) {
  	res.send('hello');
  app.render('user_ejs.html', function(err, renderedData){
    res.send(renderedData);    
  });
});