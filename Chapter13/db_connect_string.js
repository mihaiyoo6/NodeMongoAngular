var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://testUser:test@localhost:27017/testDB',{
	db:{w:1, native_parser: false},
	server:{
		poolSize: 5,
		socketOptions: {connectionTmesoutMS: 500},
		auto_reconnect: true
	},
	replSer: {},
	mongos:{},
}, function(err, db){
	if(err){
		console.log("Connection Failed via Connection String.");
	}else{
		console.log("Connected via Connection String");
		db.logout(function(err, result){
			if(!err){
				console.log("Logged out Via Connection string.");
			}
			db.close();
			console.log("connection closed.");
		});
	}
});