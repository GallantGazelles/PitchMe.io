const pg = require('pg');
const db = require('../db.js');

// module.exports.getAllPitches = () => {
//   //Returns promise with query
//   return db.query("SELECT * FROM pitches;");
// };
//new getAllPitches:
module.exports.getAllPitches = (user_id) => {
	return db.query(`SELECT Table1.*, Table2.vote_type FROM (SELECT pitches.*, COUNT(followers.id), SUM(votes.vote_type) votes FROM pitches, followers, votes WHERE pitches.id = followers.pitch_id AND pitches.id = votes.pitch_id GROUP BY pitches.id) Table1 INNER JOIN (select vote_type, pitch_id FROM votes WHERE user_id=${user_id}) Table2 on (Table2.pitch_id = Table1.id);`);
};

//add pitch, needs all info:
module.exports.getPitchByPitchId = (pitchId) => {
  return db.query(`SELECT * from pitches where id = ${pitchId};`)
};
//should set the default value of investment status & votes in the table schema
module.exports.addPitch = (user_id, name, video, website, profile, blurb, category_id)=> {
  return db.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id) VALUES (${user_id}, '${name}', '${video}', '${website}', '${profile}', '${blurb}', '${category_id}');`);
};
//currently by name, later on change to a unique hash we created for the user when pitch was created
module.exports.deletePitch = (pitchId) => {
	return db.query(`DELETE FROM pitches WHERE id='${pitchId}'`);
};

module.exports.updatePitchByPitchId = (pitchId, userId, newName, video, website, profile, blurb, category_id) => {
	return db.query(`UPDATE pitches SET user_id=${userId}, name='${newName}', video='${video}', website='${website}', profile='${profile}', blurb='${blurb}', category_id=${category_id} WHERE id=${pitchId};`);
};

module.exports.getPitchByCategoryId = (categoryId) => {
  return db.query(`SELECT * FROM pitches WHERE category_id = ${categoryId};`)
};