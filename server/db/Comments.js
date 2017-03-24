const pg = require('pg');
const db = require('../db.js');

const connectionString = 'postgres://localhost:5432/ggdb';

module.exports.getAllComments = () => {
  return db.query("SELECT * FROM comments");
}

module.exports.getCommentsByPitchName = (pitchName) => {
  return db.query(`SELECT comments.* FROM comments, pitches where comments.pitch_id = pitches.id AND pitches.name = '${pitchName}' ORDER BY timestamp DESC`);
}

module.exports.getCommentsByPitchId = (pitchId) => {
  return db.query(`SELECT comments.* FROM comments WHERE comments.pitch_id = '${pitchId}' ORDER BY timestamp DESC`);
}

module.exports.getCommentsByUserId = (userId) => {
  return db.query(`SELECT comments.* FROM comments WHERE comments.user_id = '${userId}' ORDER BY timestamp DESC`);
}

module.exports.deleteCommentByCommentId = (commentId) => {
  return db.query(`DELETE FROM comments where id = '${commentId}'`);
}

module.exports.createCommentInComments = (userId, pitchId, comment) => {
  return db.query(`INSERT INTO comments (user_id, pitch_id, comment) VALUES (${userId}, ${pitchId}, '${comment}')`);
}