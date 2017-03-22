const pg = require('pg');
const db = require('../db.js');
const crypto = require('crypto');

const connectionString = 'postgres://localhost:5432/ggdb';

module.exports.getSalt = (userId) => {
  return db.query(`SELECT salt FROM sessions WHERE user_id=${userId}`);
};

module.exports.addSession = (sessionId) => {
  // console.log('here!');
  return db.query(`INSERT INTO sessions (session_id) VALUES ('${sessionId}')`);
};



// module.exports.getSession = ()

// module.exports.getCookie

