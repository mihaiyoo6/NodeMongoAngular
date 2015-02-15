var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', function(err, db){
	if(err) throw err;
	var myDB = db.db('words');
	myDB.collection("word_stats", aggregateItems);
	setTimeout(function(){
		db.close();
	},3000);
});
function aggregateItems(err, words){
	words.aggregate(
		[{$match: {first:{$in:['a', 'e', 'o', 'i', 'u']}}},
		{$group:{_id:"$first",
				largerst:{$max:"$size"},
				smallest:{$min:"$size"},
				total:{$sum:1}}},
		{$sort: {_id:1}}],
		function(err, results){
			console.log("Largest and smallest words sizes for words begining witha a vowel:");
			console.log(results);
		}
	);
	words.aggregate(
		[{$match:{size:4}},
		{$limit:5},
		{$project: {_id:"$word", stats:1}}],
		function(err, results){
			console.log("Stats for 5 four letters wowrds: ");
			console.log(results);
		}
	);
	words.aggregate(
		[{$group:{_id:"$first", average:{$avg:"$size"}}},
		{$sort:{average:-1}},
		{$limit:5}],
		function(err, results){
			console.log("Letters with larges average word size:");
			console.log(results);
		}
	);
}