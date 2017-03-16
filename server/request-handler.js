var express = require('express');
var pg = require('pg');
//var db = require('./db.js');

var connectionString = 'postgres://localhost:5432/ggdb';

var handleRootGet = function(req, res, next) {
    //handle get request to send back videos:
    
    res.send('Hellow world!');
};

var handleRootPost = function(req, res, next) {
	res.send('Hey POST request!');
};


var init = function() {
	console.log('init');
	pg.connect(connectionString, function(err, client, done) {
    	if(err) {
    		done();
    		console.error(err.message);
    		return;
    	}
        //change these to CREATE IF NOT EXISTS later:
    	client.query('CREATE TABLE IF NOT EXISTS users \
    		( id SERIAL PRIMARY KEY, \
    		username VARCHAR(30), \
    		password VARCHAR(40), \
    		profile TEXT,\
    		CONSTRAINT usrename_unique UNIQUE (username) \
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS pitches \
    		(id SERIAL PRIMARY KEY, \
    		user_id INTEGER, \
    		name VARCHAR(40), \
    		video TEXT, \
    		website TEXT, \
    		profile TEXT, \
    		blurb TEXT, \
    		category_id INTEGER, \
    		votes INTEGER, \
    		investment_status BOOL \
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS followings \
    		(id SERIAL PRIMARY KEY, \
    		user_id INTEGER, \
    		pitch_id INTEGER \
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS categories \
    		(id SERIAL PRIMARY KEY, \
    		name VARCHAR(20) \
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS votes \
    		(id SERIAL PRIMARY KEY, \
    		user_id INTEGER, \
    		pitch_id INTEGER, \
    		vote_type INTEGER\
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS investments \
    		(id SERIAL PRIMARY KEY, \
    		user_id INTEGER, \
    		pitch_id INTEGER \
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS sessions \
    		(id SERIAL PRIMARY KEY, \
    		user_id INTEGER, \
    		cookie VARCHAR (60), \
    		salt VARCHAR(40), \
    		timestamp TIMESTAMP\
    		)'
    	);

    	client.query('CREATE TABLE IF NOT EXISTS comments \
    		(id SERIAL PRIMARY KEY, \
    		comment TEXT, \
    		user_id INTEGER, \
    		pitch_id INTEGER, \
    		timestamp TIMESTAMP\
    		)'
    	);


    });
};

module.exports = {
	init: init,
	handleRootGet: handleRootGet,
	handleRootPost: handleRootPost
};