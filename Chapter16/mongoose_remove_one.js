var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function(){
	var query = Words.findOne().where('word','gratifaction');
	query.exec(function(err, doc){
		console.log("Before detele: ");
		console.log(doc);
		doc.remove(function(err, deletedDoc){
			Words.findOne({word: 'gratifaction'}, function(err, doc){
				console.log("\n After Delete: ");
				console.log(doc);
				mongoose.disconnect();
			})
		})
	})
})