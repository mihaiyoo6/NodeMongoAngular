var MongoClient = require('mongodb').MongoClient;
var GridStore = require('mongodb').GridStore;
var Grid = require('mongodb').Grid;
MongoClient.connect('mongodb://localhost', function(err, db){
	if(err) throw err;
	var grid = new Grid(db, 'fs');
	var data = new Buffer('Hello word');
	console.log('\n Original Data: ');
	console.log(data.toString());
	grid.put(data,{_id: 'test.file'}, function(err, results){
		console.log("\n put results: ");
		console.log(results);
		grid.get('test.file', function(err, data){
			console.log('\n Before detele get: ');
			console.log(data.toString());
			grid.delete('test.file', function(err, results){
				console.log("\n Delete results: ");
				console.log(results);
				db.close();
			});
		});
	});
});