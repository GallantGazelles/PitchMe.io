var express = require('express');
var pg = require('pg');
var db = require('./db.js');

var connectionString = 'postgres://localhost:5432/ggdb';

var handleRootGet = function(req, res, next) {
    //handle get request to send back videos:
    pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting all from users table");
        }
        client.query("SELECT * FROM users")
        .then(function(results) {
            res.status(200).json(results.rows);
        });
    });
};

var handleRootPost = function(req, res, next) {
	res.send('Hey POST request!');
};


var init = function() {
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

module.exports = {
	init: init,
	handleRootGet: handleRootGet,
	handleRootPost: handleRootPost
};