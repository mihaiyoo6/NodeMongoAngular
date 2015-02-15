var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
	if(err) throw err;
  var myDB = db.db("words");
  myDB.collection("word_stats", countItems);
  setTimeout(function(){
    db.close();
  }, 3000);
});


function countItems(err, words){
  words.count({first:{$in: ['a', 'b', 'c']}}, function(err, cursor){
    console.log("Words starting with a, b or c: "+ cursor);
  });

  words.count({size:{$gt: 12}}, function(err, cursor){
    console.log("Words longer than 12 characters: "+ cursor);
  });

  words.count({size:{$mod:[2,0]}}, function(err, cursor){
    console.log("words with event lengths: "+cursor);
  });

  words.count({letters:{$size:6}}, function(err, cursor){
    console.log("Words with 12 distinct characters: "+ cursor);
  });

  words.count({$and: [{first:{$in: ['a','e','i','o','u']}}, {last:{$in:['a','e','i','o','u']}}]}, function(err, cursor){
    console.log("Words stat start and end with a vowel: "+ cursor);
  });
  
  words.count({"stats.vowels":{$gt:5	}}, function(err, cursor){
    console.log("words containing 6 or more vowels: "+ cursor);
  });
  
  words.count({letters:{$all:['a','e','i','o','u']}}, function(err,cursor){
    console.log("words with all vowels: "+ cursor);
  });

  words.count({otherChars: {$exists:true}}, function(err, cursor){
    console.log("Words with non alphabet characters: "+ cursor);
  });

  words.count({charsets:{$elemMatch:{$and:[{type:'other'}, {chars:{$size:2}}]}}}, function(err, cursor){
   console.log("words with 2 non-alphabet characters: "+ cursor);	
  });
}