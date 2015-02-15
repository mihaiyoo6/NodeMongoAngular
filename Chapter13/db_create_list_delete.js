var MongoClient =require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
	var adbminDB = db.admin();
	adbminDB.listDatabases(function(err, databases){
		console.log("Befor Add Database List:");
		console.log(databases);
	});
	var newDB = db.db("newDB");
	newDB.createCollection("newCollection", function(err, collection){
		if(!err){
			console.log("New Database and Collection Created");
			adbminDB.listDatabases(function(err, databases){
				console.log('After Add Database list: ');
				console.log(databases);
				db.db('newDB').dropDatabase(function(err, results){
					if(!err){
						console.log("data base droped");
						setTimeout(function(){
							adbminDB.listDatabases(function(err, results){
								var found = false;
								for (var i = 0; i<results.databases.length; i++){
									if(results.databases[i].name == 'newDB') found = true;
								}
								if(!found){
									console.log("After Delete Database list: ");
									console.log(results);
								}
								db.close();
							});
						},1500);
					}
				});
			});
		}
	});
});