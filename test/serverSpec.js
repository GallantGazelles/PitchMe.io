var supertest = require('supertest');
var expect = require('chai').expect;
var pg = require('pg');
// var request = require('request');
var app = require('../server/app.js');


var server = supertest.agent('http://localhost:8080');
//in beforeEach may also need to connect to server
const config = {
  database: 'testggdb',
  max: 10
};
//just made it a pool
let client = new pg.Pool(config);
client.connect();

describe('test homepage & users table', function() {
	beforeEach((done) => {
		console.log("**************beforeEach")
		client.query('DROP TABLE IF EXISTS users, categories')
	    .then((results) => {
	    	// console.log("after droping db: ", results);
	    	return client.query('CREATE TABLE users \
		      ( id SERIAL PRIMARY KEY, \
		      username VARCHAR(30), \
		      password VARCHAR(40), \
		      profile TEXT,\
		      CONSTRAINT username_unique UNIQUE (username) \
		      )')
	    }).then(function(results) {
	      // console.log('insert users');
	      // console.log('results from previous computation: ', results)
	      return client.query(`INSERT INTO users (username, password, profile) VALUES ('User1', '123', 'Profile for User1')`);
	    })
	    .then(
	      client.query(`INSERT INTO users (username, password, profile) VALUES ('User2', '123', 'Profile for User2')`)
	    )
	    .then(
	      client.query(`INSERT INTO users (username, password, profile) VALUES ('User3', '123', 'Profile for User3')`)
	    )
	    .then(() => {
	      	done();
	      }
	    ).catch((err) => {
	    	console.log(err);
	    });

	    console.log('Success');
	});

	// afterEach(function() {
	// 	client.query('DROP TABLE IF EXISTS users');
	// 	// done();
	// });

	it('should return homepage', function(done) {
		console.log("starting homepage test")
		supertest(app).get('/')
		.expect('Content-type', /html/)
		.expect(200)
		.end(function(err, res) {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(!!res.body.error).to.equal(false);
			done();
		});
	});
    //Users get:
	it('should return all users', function(done) {
		supertest(app)
		.get('/api/users?q=users')
		// .expect('Content-Type', /json/)
		.expect(200)
		.end((err,response) => {
			if(err) {
				return done(err);
			}
			// console.log('im response body: ', response.body);
			expect(response.body.length).to.equal(3);
			done();
		});
	});

	it('should return a user given his/her userId', function(done) {
		supertest(app)
		.get('/api/users?q=user&user_id=1')
		.expect(200)
		.end((err, response) => {
			if(err) {
				return done(err);
			}
			expect(response.body.length).to.equal(1);
			expect(response.body[0].username).to.equal('User1');
			done();
		});
	});

	// it('should be able to add users', function(done) {
	// 	supertest(app)
	// 	.post('/api/users')
	// });
	//shouldn't add user with exisitng user name:

});


describe('test categories table', function() {

	beforeEach((done) => {
		console.log('=================');
	    client.query('DROP TABLE IF EXISTS categories, users')
	    .then((results) => {
		    return (client.query('CREATE TABLE categories \
		      (id SERIAL PRIMARY KEY, \
		      name VARCHAR(20), \
		      CONSTRAINT categoryname_unique UNIQUE (name)\
		      )'));
	    })
	    .then((results) => {
	      return client.query(
	        `INSERT INTO categories (name) VALUES ('Tech'), ('Games'), ('Books'), ('iPhone'), ('Android'), ('Productivity')`);
	    })
	    .then(() => {
	    	done();
	    })
	    .catch((err) => {
	    	console.error(err);
	    });
	    console.log('Success');
	});
	
    //Categories get:
    it('should return all categories', function(done) {
    	supertest(app)
    	.get('/api/categories')
    	.expect(200)
    	.end((err, response) => {
    		// console.log('response: ', response);
    		expect(response.body.length).to.equal(6);
    		done();
        });
    });
});

// describe('test pitches table', function() {
// 	beforeEach((done) => {
// 		console.log('+++++++++++++++++++++');

// 		client.query('DROP TABLE IF EXISTS pitches')
// 		.then(() => {
// 			return client.query('CREATE TABLE IF NOT EXISTS pitches \
// 			(id SERIAL PRIMARY KEY, \
// 			user_id INTEGER, \
// 			name VARCHAR(40), \
// 			video TEXT, \
// 			website TEXT, \
// 			profile TEXT, \
// 			blurb TEXT, \
// 			category_id INTEGER, \
// 			votes INTEGER DEFAULT 0, \
// 			investment_status BOOL DEFAULT FALSE, \
// 			CONSTRAINT pitchname_unique UNIQUE (name)\
// 			)');
// 		}).then(() => {
// 			return (client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
// 			'1', 'Pitch 1', 'Pitch 1 Video URL', 'Pitch 1 Website URL', 'Pitch 1 Profile', 'Pitch 1 Blurb', '1', '0', 'TRUE')`));
// 		}).then(() => {
// 			return (client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
// 			'2', 'Pitch 2', 'Pitch 2 Video URL', 'Pitch 2 Website URL', 'Pitch 2 Profile', 'Pitch 2 Blurb', '2', '2', 'FALSE')`));
// 		}).then(() => {
// 	    	done();
// 	    })
// 	    .catch((err) => {
// 	    	console.error(err);
// 	    });
// 	    console.log('Success');
// 	});
// })




















