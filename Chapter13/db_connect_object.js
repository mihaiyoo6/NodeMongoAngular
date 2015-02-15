var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost', 27017, {
	socketOptions: { connectTimeoutMS: 500},
	poolSize: 5,
	auto_reconnect: true
},{
	numberOfRetries: 3,
	retryMilliSeconds:500
}));
client.open(function(err, client){
	if(err){
		console.log("Connection Failed Via Client Object.");
	}else{
		var db = client.db("testDB");
		if(db){
			console.log("Connected Via Client Object . . .");
			db.authenticate("testUser", "test", function(err, results){
				if(err){
					console.log("Authentication failed . . .");
					db.close();
					console.log("Connection closed . . .");
				}else{
					console.log("Authentited via Client Obeject . . . ");
					db.logout(function(err, result){
						if(!err){
							console.log("Logged out Via Client Object . . . ");
						}else{
							client.close();
							console.log("Connection Closed .. . ");
						}
					});

				}
			});
		}
	}
});
