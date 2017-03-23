const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pg = require('pg');
const db = require('../db.js');
const User = require('../db/User.js');

var localStrategy = new LocalStrategy({
	usernameField: 'username',
	passowrdField: 'passowrd'
}, (username, password, done) => {
	User.getUserByUsername(username)
	.then((user) => {
		console.log('this is user: ', user);
		done(null, user);
	}).catch((err) => {
		done(null, false, {message: 'Invalid information'});
	});
});
passport.use('local', localStrategy);
// passport.use(localStrategy);
// passport.use(new LocalStrategy ( (username, password, done) => {
// 	User.getUserByUsername(username)
// 	.then((results) => {
// 		User.getUserPasswordByName(username)
// 		.then((pwd) => {
// 			if(pwd !== password) {
// 				done(null, false);
// 			} else {
// 				console.log('success');
// 				return User.getUserByUsername(username);
// 			}
// 		});
// 	})
// 	.catch((err) => {
// 		done(nul, false);
// 		console.log('Error in local strategy');
// 	});
// }));

passport.serializeUser((user, done) => {
	done(null, user.username);
});

passport.deserializeUser((username, done) => {
	//find a user in sesssions db table
	db.query(`SELECT * FROM users WHERE username='${username}'`)
	.then((user) => {
		done(null, user);
	}).catch((err) => {
		done(null, false, {message: err.message});
	});
});

passport.authenticateMiddleware = () => {
	return ((req, res, next) => {
		if(req.isAuthenticated()) {
			return next();
		}
		res.redirect('/login');
	});
};

module.export = passport;






