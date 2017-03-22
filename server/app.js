const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const db = require('./db.js');
const session = require('express-session');
const PostgreSqlStore = require('connect-pg-simple')(session);
const app = express();
const router = require('./routes.js');
const SessionTAB = require('./routes/Sessions');

let sessionOptions = {
	secret: "secret",
	name: 'pitchme.io', //TBD: is this the key for cookie?
	resave: true,
	cookie: {maxAge: 30 * 24 * 60 * 60 * 1000},
	saveUninitialized: false,
	store: new PostgreSqlStore({
		conString: 'postgres://localhost:5432/ggdb',
	    pg: pg,
	    tableName: 'sessions'})
	// store: new PostgreSqlStore({conString: 'postgres://postgres:postgres@localhost:5433/postgres'
    // })
};
app.use(session(sessionOptions));
app.get('/', function(req, res) {
	let sess = req.session;
    if(sess.name === 'pitchme.io') {
    	//resume session, get all the user data

    } else {
    	//assign new session.
    	let s = SessionTAB.assignSession();
    	console.log('sessionid is: ', s);
    	//how to manipulate cookie in res?
    	console.log('response: ', res);
 
    	//send back cookie with the key of 'pitchme.io'
    }
	// console.log(req);
	// console.log(req.session);
	// //find out the sessionID
	// console.log('res sessionID: ', res.req.sessionID);
	res.end('bye');
});
app.use(express.static(path.join(__dirname, '/../client/')));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(8080, function() {
	console.log('listening to 8080');
});

module.exports = app;