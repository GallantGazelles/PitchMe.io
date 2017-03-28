const passport = require('passport');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/User.js');

router.get('/signin', (req, res, next) => {
	//render or redirect
	// res.render('');
	if(req.session.passport && req.session.passport.user) {
		res.send({user_id: req.session.passport.user.rows[0].id, username: req.session.passport.user.rows[0].username});
	} else {
		res.end('GET request to login, bye');
	}
});

router.post('/signin', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: true}), (req, res) =>{
	res.send({redirect: '/'});
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/signin');
});

module.exports = router;

//**************************
var localStrategy = new LocalStrategy((username, password, done) => {
	User.getUserByUsername(username)
	.then((user) => {
		if(user.rows.length !== 0) {
			console.log('check pwd');
			bcrypt.compare(password, user.rows[0].password)
			.then(res => {
				if(res) {
					done(null, user);
				} else {
					throw 'Invalid information';
				}
			});
		} else {
			throw 'Invalid information';
		}
	}).catch((err) => {
		done(err);
	});
});


passport.use('local', localStrategy);

const _comparePassword = (newPass, oldPass) => {
    //should hash newPass, and then compare
    return newPass === oldPass;
};

passport.serializeUser((user, done) => {
	//using user.id in done led to failure in writing passport into req.session!!!!
	// req.session.passport.user.rows
	// done(null, user.rows.id);
	done(null, user);
});

passport.deserializeUser((user, done) => {
	//find a user in sesssions db table
	done(null, user);
});


