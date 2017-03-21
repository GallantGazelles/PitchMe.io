const pg = require('pg');
const db = require('../db.js');

module.exports.getPitchFollowerCount = (pitchId) => {
  return db.query(`SELECT COUNT(id) from followers where pitch_id = ${pitchId};`);
};

module.exports.getPitchFollowers = (pitchId) => {
  return db.query(`SELECT users.* from users, followers where followers.pitch_id = ${pitchId} AND users.id = followers.user_id;`);
};

module.exports.getUserPitchFollows = (userId) => {
  return db.query(`SELECT pitches.* from pitches, followers where followers.user_id = ${userId} AND pitches.id = followers.pitch_id;`);
};

module.exports.postNewPitchFollower = (userId, pitchId) => {
  return db.query(`INSERT INTO followers (user_id, pitch_id) SELECT ${userId}, ${pitchId} WHERE NOT EXISTS (SELECT 1 FROM followers WHERE user_id = ${userId} AND pitch_id = ${pitchId});`);
};

module.exports.deletePitchFollower = (userId, pitchId) => {
  return db.query(`DELETE FROM followers WHERE user_id = ${userId} AND pitch_id = ${pitchId}`);
}