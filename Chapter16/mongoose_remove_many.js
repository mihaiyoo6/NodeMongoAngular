var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function(){
	Words.find({word: /grat.*/}, function(err, docs){
		console.log('Before Delete: ');
		for(var i  in docs){
			console.log(docs[i].word);
		}
		var query = Words.remove();
		query.where('word'). regex(/grat*/);
		query.exec(function(err, results){
			console.log("\n%d Documents Deleted", results);
			Words.find({word:/grat.*/}, function(err, docs){
				console.log("\n After delete:");
				for(var i in docs){
					console.log(docs[i].words);
				}
				mongoose.disconnect();
			});
		});
	});
});