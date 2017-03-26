const Vote = require('./../db/Votes');

module.exports.getVoteByUsername = (req, res, next) => {
	const {pitch_id} = req.query;
	let username = req.session.username;
	Vote.getVoteByUsername(username, pitch_id)
	.then((results) => {
		res.status(200).json(results.rows[0].vote_type);
	}).catch((err) => {
		res.status(404).send('Query error!');
	});
};