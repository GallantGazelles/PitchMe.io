const express = require('express');
const pg = require('pg');
const db = require('./db.js');

const connectionString = 'postgres://localhost:5432/ggdb';

module.exports.handleRootGet = (req, res, next) => {
    //handle get request to send back videos:
    db.query("SELECT * FROM users")
    .then(function(results) {
        res.status(200).json(results.rows);
    });
};
//to be done:
module.exports.handleSignUp = (req, res, next) => {
    //util file for hashing password
};

module.exports.handleRootPost = (req, res, next) => {
	res.send('Hey POST request!');
};


module.exports.init = () => {
	console.log('init');
	// pg.connect(connectionString, function(err, client, done) {
 //    	if(err) {
 //    		done();
 //    		console.error(err.message);
 //    		return;
 //    	}
 //        //change these to CREATE IF NOT EXISTS later:
 //    });
};