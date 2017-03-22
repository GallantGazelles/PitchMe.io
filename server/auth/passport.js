const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pg = require('pg');
const db = require('../db.js');
const User = require('../db/User.js');


passport.use(new LocalStrategy ( (username, password, done) => {
	User.getUserByUsername(username)
	.then((results) => {
		User.getUserPasswordByName(username)
		.then((pwd) => {
			if(pwd !== password) {
				done(null, false);
			} else {
				console.log('success');
				return User.getUserByUsername(username);
			}
		});
	})
	.catch((err) => {
		done(nul, false);
		console.log('Error in local strategy');
	});
}));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	//find a user in sesssions db table
	db.query('SELECT * FROM users WHERE id=${id}')
	.then((user) => {
		done(null, user);
	}).catch((err) => {
		done(null, false, {message: err.message});
	});
});
