var fs = require('fs');
var Path = require('path');
function WalkDirs(dirPath){
	//console.log(dirPath);
	fs.readdir(dirPath, function(err, entries){
		for(var idx in entries){
			var fullPath = Path.join(dirPath, entries[idx]);
			(function(fullPath){
				fs.stat(fullPath, function(err, stats){
					if(stats && stats.isFile()){
	//					console.log(fullPath);
					}else if(stats && stats.isDirectory()){
						WalkDirs(fullPath);
					}
				});
			})(fullPath);
		}
	});
}
WalkDirs("../Chapter06");
// Delete a file
fs.unlink("new.txt", function(err){
	//console.log(err ? "File Delete Failed" : "File Deleted");
});

//Truncate a file to a specific dimension
fs.truncate("new1.txt", function(err){
	//console.log(err ? "File Truncate Failed" : "File Truncated");
});

// create directory structure
fs.mkdir("./data", function(err){
	fs.mkdir("./data/folderA", function(err){
		fs.mkdir("./data/folderA/folderB", function(err){

			fs.mkdir("./data/folderA/folderB/folderD", function(err){
			});

		});
		fs.mkdir("./data/folderA/folderC", function(err){
			fs.mkdir("./data/folderA/folderC/folderE", function(err){

			});
		});
	});
});

// remove directory atention on empty folders and right structure
fs.rmdir("./data", function(err){
	fs.rmdir("./data/folderA/folderB/folderD", function(err){
		console.log(err ? "DIR D Delete Failed" : "DIR D Deleted");
		fs.rmdir("./data/folderA/folderB", function(err){
			console.log(err ? "DIR B Delete Failed" : "DIR B Deleted");
			fs.rmdir("./data/folderA", function(err){
				console.log(err ? "DIR A Delete Failed" : "DIR A Deleted");
			});
		});
		fs.rmdir("./data/folderA/folderC", function(err){
			console.log(err ? "DIR C Delete Failed" : "DIR C Deleted");
			fs.rmdir("./data/folderE", function(err){
				console.log(err ? "DIR E Delete Failed" : "DIR E Deleted");
			});
		});
	});
});
fs.mkdir("./test", function(err){
	/*fs.rmdir("./test", function(err){
		console.log(err ? "DIR TEST Delete Failed" : "DIR TEST Deleted");
	});*/
});

// rename

fs.rename('new1.txt', "renamed.txt", function(err){
	console.log(err ? "Rename Failed" : "File Renamed");
});
fs.rename("test", "new_test", function(err){
	console.log(err ? "DIR Rename Failed" : "DIR Renamed");
});

// watch file change 
fs.watchFile("log.txt", {persistent: true, interval:1000}, function(curr, prev){
	console.log('log.txt modified at: '+ curr.mtime);
	console.log(curr);
	console.log("Previous modification was: " + prev.mtime);
	console.log(prev);
});