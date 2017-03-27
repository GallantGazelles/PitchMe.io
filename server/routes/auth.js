const passport = require('passport');
const express = require('express');
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/User.js');

router.get('/signin', (req, res, next) => {
	//render or redirect
	// res.render('');
	console.log('get signin', {user_id: req.session.passport.user.rows[0].id, username: req.session.passport.user.rows[0].username});
	res.send({user_id: req.session.passport.user.rows[0].id, username: req.session.passport.user.rows[0].username});
	res.end('GET login, bye');
	// res.status(200).json({user_id: req.session.passport.user.rows[0].id, username: req.session.passport.user.rows[0].username});
});

router.post('/signin', passport.authenticate('local', {failureRedirect: '/signin'}), (req, res) => {
	//redirect to loggedIn home
	res.send({username: req.body.username, user_id: req.session.passport.user.rows[0].id});
	// res.redirect('/notfound');
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
			//check pwd
			console.log('check pwd');
			if(_comparePassword(password, user.rows[0].password)) {
				done(null, user);
			} else {
				throw 'Invalid information';
			}
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


