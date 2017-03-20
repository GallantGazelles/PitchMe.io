const db = require('./../db/Comments');

module.exports.getComments = (req, res) => {
	const { userId, pitchId } = req.query;

	if(pitchId) {
		db.getCommentsByPitchId(pitchId)
		.then(results => res.send(results.rows))
		.catch(error => res.send(error));
	}

	if(userId) {
		db.getCommentsByUserId(userId)
		.then(results => res.send(results.rows))
		.catch(error => res.send(error));
	}
};

module.exports.postComment = (req, res, next) => {
	res.send('To do on post comment');
};
