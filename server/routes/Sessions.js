const pg = require('pg');
const db = require('../db.js');
const crypto = require('crypto');

//alsdfkjaslkdfjas;lkdfjasl;kdfjsalfdkjasl;kdfjaslkfdj

module.exports.addSession = (sessionId) => {
  // console.log('here!');
  return db.query(`INSERT INTO sessions (session_id) VALUES ('${sessionId}')`);
};



// module.exports.getSession = ()

// module.exports.getCookie

