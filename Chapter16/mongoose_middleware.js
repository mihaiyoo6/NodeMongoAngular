var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema)
Words.schema.pre('init', function(next){
	console.log(' A new word is about to be initialized from the db');
	next();
});
Words.schema.pre('validate', function(next){
	console.log('%s is about to be validated', this.word);
	next();
});
Words.schema.pre('save', function(next){
	console.log("%s is about to be saved", this.word);
	console.log('Setiting size to %d ', this.word.length );
	this.size = this.word.length;
	next();
});
Words.schema.pre('remove', function(next){
	console.log('%s is about to be removed', this.word);
	next();
});
Words.schema.post('init', function(doc){
	console.log('%s has been initialized from DB', doc.word);
});

Words.schema.post('validate', function(doc){
	console.log("%s hab been validated", doc.word);
});
Words.schema.post('save', function(doc){
	console.log('%s has been saved', doc.word);
});
Words.schema.post('remove', function(doc){
	console.log('%s has been removed', doc.word);
});

mongoose.connection.once('open', function(){
	var newWord = new Words({
		word: 'newWord',
		first: 'n',
		last:'d',
		size:'newWord'.length
	});
	console.log('\nsaving');
	newWord.save(function(err){
		console.log('\n Finding: ');
		Words.findOne({word:'newWord'}, function(err, doc){
			console.log('\n removing');
			newWord.remove(function(err){
				mongoose.disconnect();
			});
		});
	});
});