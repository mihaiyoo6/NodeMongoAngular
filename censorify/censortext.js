var censoredWords = ["sad", "bad", "mad"];
var customCensoredVords = [];
function censor(inStr){
	for (idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for (idx in customCensoredVords){
		inStr = inStr.replace(customCensoredVords[idx], "****");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensoredVords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredVords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;