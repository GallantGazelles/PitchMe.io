const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const pg = require('pg');
const db = require('./db.js');
const session = require('express-session');
const app = express();
const router = require('./routes.js');
const SessionTAB = require('./routes/Sessions');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret: 'secret',
	resave: true,//resave true updates session on each page view. this avoids session expire
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());//what's this?
app.use('/auth', function(req, res) {
	d
});
app.use(express.static(path.join(__dirname, '/../client/')));

app.use('/api', router);

app.listen(8080, function() {
	console.log('listening to 8080');
});

module.exports = app;