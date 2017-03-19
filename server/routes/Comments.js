const db = require('./../db/Comments');

module.exports.getAllComments = (req, res) => {
	db.getAllComments().then(results => res.send(results.rows));
};

module.exports.createCommentInComments = (req, res) => {
	db.createCommentInComments(req.body.userId, req.body.pitchId, req.body.comment)
	.then(results => res.send('Successfully created a comment'))
	.catch(err => res.send('Error in creating comments'));
};

module.exports.deleteCommentByCommentId = (req, res) => {
	db.deleteCommentByCommentId(req.body.commentId)
	.then()
}

//change comments:
