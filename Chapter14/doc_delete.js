var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', function(err, db){
	if(err) throw err;
	var myDB = db.db('astro');
	myDB.collection('nebulae', function(err, nebulae){
		nebulae.find(function(err, items){
			items.toArray(function(err,itemArr){
				console.log("Befor Delete");
				console.log(itemArr);
				nebulae.remove({type:'Planetary'}, function(err, results){
					console.log("Deleted" + results + "documents.");
					nebulae.find(function(err, items){
						items.toArray(function(err, itemArr){
							console.log('After delete');
							console.log(itemArr);
							db.close();
						});
					});
				});
			});
		});
	});
	
});