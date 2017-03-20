const pg = require('pg');
const db = require('../db.js');

module.exports.getAllPitches = () => {
  //Returns promise with query
  return db.query("SELECT * FROM users");
};
//add pitch, needs all info:
module.exports.addAPitch = (user_id, name, video, webiste, profile, blurb, category_id)=> {
  return db.query(`INSERT INTO users (user_id, name, video, website, profile, blurb, category_id) VALUES ('${user_id}', '${name}', '${video}', '${website}', '${profile}', '${blurb}', '${category_id}')`);
};
//currently by name, later on change to a unique hash we created for the user when pitch was created
module.exports.deleteAPitch = (pitchName) => {
	return db.query(`DELETE FROM pitches WHERE name='${pitchName}'`);
};

module.exports.updateAPitchByName = (oldPitchName, user_id, newName, video, webiste, profile, blurb, category_id) => {
	return db.query(`UPDATE users SET user_id='${user_id}', name='${newName}', video='${video}', website='${website}', profile='${profile}', blurb='${blurb}', category_id='${category_id}' WHERE name='${oldPitchName}')`);
};