var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/test', function(err, db){
	var adminDb = db.admin();
	adminDb.serverStatus(function(err, status){
		console.log(status);
		db.close();
	});
});