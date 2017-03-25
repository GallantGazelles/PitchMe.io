const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const pg = require('pg');

const db = require('./db.js');
const session = require('express-session');
const app = express();
const auth = require('./routes/auth.js');
const router = require('./routes.js');
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/../client/')));
//Test for redux
// app.use(express.static(path.join(__dirname, '/../redux/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret: 'secret',
	resave: true,//resave true updates session on each page view. this avoids session expire
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', auth);
app.use(express.static(path.join(__dirname, '/../client/')));

app.use('/', express.static(path.join(__dirname, '/../client/')));
app.use('/companies', express.static(path.join(__dirname, '/../client/')));
app.use('/createpitch', express.static(path.join(__dirname, '/../client/')));
app.use('/pitch', express.static(path.join(__dirname, '/../client/')));
app.use('/signup', express.static(path.join(__dirname, '/../client/')));
app.use('/signin', express.static(path.join(__dirname, '/../client/')));
app.use('/notfound', express.static(path.join(__dirname, '/../client/')));
app.use('/user', express.static(path.join(__dirname, '/../client/')));
app.use('/api', router);

app.listen(8080, function() {
	console.log('listening to 8080');
});

module.exports = app;