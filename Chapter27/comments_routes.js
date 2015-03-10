var express = require('express');
module.exports = function(app){
	var photos = require('./controllers/photos_controller'),
		comments = require('./controllers/comments_controller'),
		pages = require('./controllers/pages_controller');
		app.use('/static', express.static('./static'))
			.use('/images', express.static('./images'))
			.use('/lib', epxress.static('/lib'));

		app.get('/', function(req, res){
			res.render('photos');
		});
		app.get('/photos', photos.getPhotos);
		app.get('photo', photos.getphoto);
		app.get('/page', photos.getPage);
		app.get('/comments/get', comments.getComment);
		app.get('/comments/add', comments.addComent);
}