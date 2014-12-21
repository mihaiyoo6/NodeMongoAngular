var fs = require('fs');
var options = {encoding: 'utf8', flag: 'r'};
var fileReadStream = fs.createReadStream('grains.txt', options);
fileReadStream.on('data', function(chunk){
	console.log('Grains: %s', chunk);
	console.log('Read %b bytes of data,', chunk.length);
});
fileReadStream.on("close", function(){
	console.log("File Closed");
});
fs.exists('grains.txt', function(exists){
	console.log(exists ?  "path exists" : "path not exists");
});

fs.stat('grains.txt',function(err, stats){
	console.log(stats);
});