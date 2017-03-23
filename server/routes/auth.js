const passport = require('passport');
const express = require('express');
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/User.js');


router.get('/login', (req, res, next) => {
	//render or redirect
	// res.render('');
	console.log(res.cookie);
	console.log(res.session);
	res.end('GET login bye');
});

router. post('/login', passport.authenticate('local', {session: false}), (req, res, next) => {
	//redirect to home
	// res.redirect('/login');
	// console.log('response is: ', req.body);
	console.log('response cookie: ', req.cookies);
	res.end('POST login bye');
});

module.exports = router;

//**************************
var localStrategy = new LocalStrategy((username, password, done) => {
	User.getUserByUsername(username)
	.then((user) => {
		console.log('this is user: ', user.rows);
		console.log('username: ', user.rows[0].username);
		if(user.rows.length !== 0) {
			//check pwd
			console.log('check pwd');
			if(_comparePassword(password, user.rows[0].password)) {
				//true?
				console.log('true~~~');
				done(null, user);
			} else {
				console.log('false~~');
				throw 'Invalid information';
			}
		} else {
			throw 'Invalid information';
		}
	}).catch((err) => {
		done(null, false, {message: 'Invalid information'});
	});
});


passport.use('local', localStrategy);

const _comparePassword = (newPass, oldPass) => {
    //should hash newPass, and then compare
    return newPass === oldPass;

};


