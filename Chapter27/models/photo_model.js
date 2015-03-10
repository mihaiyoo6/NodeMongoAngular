var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	PhotoSchema = new Schema({
		title: String,
		filename: String,
		timestamp: {type: Date, default: Date.now},
		commentid: Schema.ObjectId
	});
mongoose.model('Photo', PhotoSchema);