var mongoose = require('mongoose'),
	CommentThread = mongoose.model('CommentThread'),
	Reply = mongoose.model('Reply');
exports.getComment = function(req, res){
	CommentThread.findOne({_id: req.query.commentId})
	.exec(function(err, comment){
		if(!comment){
			res.json(404, {msg:'CommentThread not Found'});
		}else{
			res.json(comment);
		}
	});
};

exports.addComment = function(req, res){
	CommentThread.findOne({_id:req.query.commentId})
	.exec(function(err, commentThread){
		if(!commentThread){
			res.json(404, {msg:'CommentThread not Found'});
		}ele{
			var newComment = Reply(req.body.newComment);
			newComment.username = generateRandomusername();
			addComment(req, res. commentThread, commentThread, req.body.parentCommentId, newComment);
		}
	});
};

function addComment(req, res, commentThread, currentComent, parentId, newComment){
	if(commentThread.id == parentId){
		commentThread.replies.push(newComment);
		updateCommentThread(req, res, commentThread);
	}else{
		for(var i=0, l=currentComent.replies.length; i<l; i++){
			var c = currentComent.replies[i];
			if(c._id == parentId){
				c.replies.push(newComment);
				var replyThread = commentThread.replies.toObject();
				updateCommentThread(req, res, commentThread);
				break;
			}else{
				addComment(req, res, commentThread, c, parentId, newComment);
			}
		}
	}
};

function updateCommentThread(req, res, commentThread){
	CommentThread.updateCommentThread({_id: commentThread.id},
		{$set:{replies:commentThread.replies}})
	.exec(function(err, savedCmment){
		if(err){
			res.json(404, {msg:"Failed to update CmmentThread"});
		}else{
			res.json({msg:"success"});
		}
	});
}

function generateRandomUsername(){
	var users =['DaNae', 'Brad', 'Brendan','Caleb', 'Aedan', 'Taeg'];
	return users[Math.floor((Math.random()*5))];
}