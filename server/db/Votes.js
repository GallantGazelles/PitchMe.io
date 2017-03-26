const pg = require('pg');
const db = require('../db.js');
const Promise = require('bluebird');

module.exports.getVoteByUsername = (username, pitch_id) => {
	return db.query(`SELECT id FROM users WHERE username='${username}'`)
	.then(results => {
		let user_id = results.rows[0].id;
		return db.query(`SELECT vote_type FROM votes WHERE user_id=${user_id} AND pitch_id=${pitch_id}`);
	}).catch(err => {
		console.log('errrrr: ', err);
	});
};