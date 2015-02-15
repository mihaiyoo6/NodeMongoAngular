var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
	if(err) throw err;
  var myDB = db.db("words");
  myDB.collection("word_stats", findItems);
  setTimeout(function(){
    db.close();
  }, 3000);
});

function displayWords(msg, cursor, pretty){
  cursor.toArray(function(err, itemArr){
    console.log("\n"+msg);
    var wordList = [];
    for(var i=0; i<itemArr.length; i++){
      wordList.push(itemArr[i].word);
    }
    console.log(JSON.stringify(wordList, null, pretty));
  });
}

function findItems(err, words){
  words.find({first:{$in: ['a', 'b', 'c']}}, function(err, cursor){
   // displayWords("Words starting with a, b or c: ", cursor);
  });

  words.find({size:{$gt: 12}}, function(err, cursor){
  	//displayWords("Words longer than 12 characters: ", cursor);
  });

  words.find({size:{$mod:[2,0]}}, function(err, cursor){
  	//displayWords("words with event lengths: ", cursor);
  });

  words.find({letters:{$size:6}}, function(err, cursor){
  	//displayWords("Words with 12 distinct characters: ", cursor);
  });

  words.find({$and: [{first:{$in: ['a','e','i','o','u']}}, {last:{$in:['a','e','i','o','u']}}]}, function(err, cursor){
  	//displayWords("Words stat start and end with a vowel: ", cursor);
  });
  
  words.find({"stats.vowels":{$gt:5	}}, function(err, cursor){
  	//displayWords("words containing 6 or more vowels: ", cursor);
  });
  
  words.find({letters:{$all:['a','e','i','o','u']}}, function(err,cursor){
  	//displayWords("words with all vowels: ", cursor);
  });

  words.find({otherChars: {$exists:true}}, function(err, cursor){
  	displayWords("Words with non alphabet characters: ", cursor);
  });

  words.find({charsets:{$elemMatch:{$and:[{type:'other'}, {chars:{$size:2}}]}}}, function(err, cursor){
  	displayWords("words with 2 non-alphabet characters: ", cursor);	
  });
}