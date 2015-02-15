var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', function(err, db){
	if(err) throw err;
	var myDB = db.db('astro');
	myDB.collection("nebulae", function(err, nebulae){
		nebulae.find(function(err, items){
			items.toArray(function(err, itemArr){
				console.log("Before Delete:");
				console.log(itemArr);
				nebulae.findAndRemove({type:'Planetary'}, [["name", 1]], {w:1},
					function(err, results){
						console.log("deleted:\n"+ results);
						nebulae.find(function(err, items){
							items.toArray(function(err, itemArr){
								console.log("AFter Delete:");
								console.log(itemArr);
								db.close();
							});
						});
					});
			});
		});
	});
});