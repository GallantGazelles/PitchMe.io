// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const init = require('./passport');
// const db = require('../db.js');

// const options = {};

// init();

// passport.use(new LocalStrategy(options, (username, password, done) => {
// 	db.query(`SELECT password FROM users WHERE username='${username}'`)
// 	.then((results) => {
// 		console.log('results of selecting name ', results);
// 		if(!results) {
// 			return done(null, false);
// 		}
// 		if(!comparePassword(password, results)) {
// 			return done(null, false);
// 		} else {
// 			return done(null, results);
// 		}
// 	}).catch(err => done(err));
// }));

// comparePassword = (input, passwordInDB) => {
// 	return input === passwordInDB;
// };

// module.exports = passport;
