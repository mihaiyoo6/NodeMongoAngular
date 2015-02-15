var MongoClient = require('mongodb').MongoClient;

function addObject(collection, object){
	collection.insert(object, function(err, result){
		if(!err){
			console.log("Inserted: ");
			console.log(result);
		}
	});
}

MongoClient.connect("mongodb://localhost/", function(err, db){
	var myDB = db.db("astro");
	myDB.dropCollection('nebulae');
	myDB.createCollection('nebulae', function(err, nebulae){
		addObject(nebulae, {ngc: 'NGS7293', name: 'Helix', type: 'Planetary', location:'Aquola'});
		addObject(nebulae, {ngc: 'NGC6543', name: 'Cat~s ', type: 'planetary', location:'Draco'});
		//addObject(nebulae, {ngc: 'NGS1952', name: 'Crab', type: 'supernova', location:'Taurus'});
	});
	setTimeout(function(){db.close();}, 3000);
});