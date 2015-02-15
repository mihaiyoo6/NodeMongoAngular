var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost', function(err, db){
	if(err) throw err;
	var myDB = db.db('words');
	myDB.collection("word_stats", groupItems);
	setTimeout(function(){
		db.close();
	},3000);
});
function groupItems(err, words){
	words.group(['first', 'last'], 
				{first:'o', last:{$in:['a', 'e', 'i','o', 'u']}},
				{"count":0},
				function(obj, prev){prev.count++;}, 
				true, 
				function(err, result){
					console.log("\n 'O' words grouped by first and last letrer that end with a vowel: ");
					console.log(result);
	});
	words.group(
		['first'],
		{size:{$gt:13}},
		{"count":0, "totalVowels":0},
		function(obj, prev){
			prev.count++;
			prev.totalVowels+=obj.stats.vowels;
		},
		{},
		true,
		function(err, results){
			console.log("\n Words grouped by first letter larget than 13: ");
			console.log(results);
		}
	);

	words.group(
		['first'],
		{},
		{"count":0, "vowels": 0, "consonants":0},
		function(obj, prev){
			prev.count++;
			prev.vowels += obj.stats.vowels;
			prev.consonants += obj.stats.consonants;
		},
		function(err, results){
			console.log("\n Words grouped by first letter with totals: ");
			console.log(results);
		}
	);


}
