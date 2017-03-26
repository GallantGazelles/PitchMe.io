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

module.exports.voteOnPitch = (vote_value, pitch_id, user_id) => {
  // See if user has voted on current Pitch
  return db.query(`SELECT * FROM votes WHERE user_id = ${user_id} AND pitch_id = ${pitch_id};`)
  .then(results => {
    if (results.rows[0]) {
      // If yes, then update their vote
      return db.query(`UPDATE votes SET vote_type = ${vote_value} WHERE user_id = ${user_id} AND pitch_id = ${pitch_id};`);
    } else {
      // If no then create the record
      return db.query(`INSERT INTO votes (user_id, pitch_id, vote_type) VALUES (${user_id}, ${pitch_id}, ${vote_value})`);
    }
  })
  .catch(err => console.log(err));
}