var supertest = require('supertest');
var expect = require('chai').expect;
var pg = require('pg');
// var request = require('request');
var app = require('../server/app.js');


var server = supertest.agent('http://localhost:8080');

const config = {
  database: 'testggdb',
  max: 10
};
//made it a pool
let client = new pg.Pool(config);
client.connect();

describe('test homepage & users table', () => {
	beforeEach((done) => {
		console.log("**************beforeEach")
		client.query('DROP TABLE IF EXISTS users')
	    .then((results) => {
	    	// console.log("after droping db: ", results);
	    	return client.query('CREATE TABLE users \
		      ( id SERIAL PRIMARY KEY, \
		      username VARCHAR(30), \
		      password VARCHAR(40), \
		      profile TEXT,\
		      CONSTRAINT username_unique UNIQUE (username) \
		      )')
	    }).then((results) => {
	      return client.query(`INSERT INTO users (username, password, profile) VALUES ('User1', '123', 'Profile for User1')`);
	    }).then((results) => (
	      client.query(`INSERT INTO users (username, password, profile) VALUES ('User2', '123', 'Profile for User2')`)
	    )).then((results) => (
	      client.query(`INSERT INTO users (username, password, profile) VALUES ('User3', '123', 'Profile for User3')`)
	    )).then(() => {
	      	done();
	      }
	    ).catch((err) => {
	    	console.log(err);
	    });

	    console.log('Success');
	});

	afterEach(() => {
		//return a promise so that we don't need to call done() anymore
		return client.query('DROP TABLE IF EXISTS users');
	});

	it('should return homepage', (done) => {
		console.log("starting homepage test")
		supertest(app).get('/')
		.expect('Content-type', /html/)
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(!!res.body.error).to.equal(false);
			done();
		});
	});
    //Users get:
	it('should return all users', (done) => {
		supertest(app)
		.get('/api/users?q=users')
		// .expect('Content-Type', /json/)
		.end((err,res) => {
			if(err) {
				return done(err);
			}
			// console.log('im response body: ', response.body);
			expect(res.status).to.equal(200);
			expect(res.body.length).to.equal(3);
			done();
		});
	});

	it('should return a user given his/her userId', (done) => {
		supertest(app)
		.get('/api/users?q=user&user_id=1')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(res.body.length).to.equal(1);
			expect(res.body[0].username).to.equal('User1');
			done();
		});
	});

	// it('should be able to add users', function(done) {
	// 	supertest(app)
	// 	.post('/api/users')
	// });
	//shouldn't add user with exisitng user name:

});


describe('test categories table', () => {

	beforeEach((done) => {
		console.log('=================');
	    client.query('DROP TABLE IF EXISTS categories')
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

	afterEach(() => {
		return client.query('DROP TABLE IF EXISTS categories');
	});
	
    //Categories get:
    it('should return all categories', (done) => {
    	supertest(app)
    	.get('/api/categories')
    	.end((err, res) => {
    		// console.log('response: ', response);
			expect(res.status).to.equal(200);
    		expect(res.body.length).to.equal(6);
    		done();
        });
    });
});

describe('test pitches table', () => {
	beforeEach((done) => {
		console.log('+++++++++++++++++++++');

		client.query('DROP TABLE IF EXISTS pitches')
		.then(() => {
			return client.query('CREATE TABLE IF NOT EXISTS pitches \
			(id SERIAL PRIMARY KEY, \
			user_id INTEGER, \
			name VARCHAR(40), \
			video TEXT, \
			website TEXT, \
			profile TEXT, \
			blurb TEXT, \
			category_id INTEGER, \
			votes INTEGER DEFAULT 0, \
			investment_status BOOL DEFAULT FALSE, \
			CONSTRAINT pitchname_unique UNIQUE (name)\
			)');
		}).then(() => {
			return client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
			'1', 'Pitch 1', 'Pitch 1 Video URL', 'Pitch 1 Website URL', 'Pitch 1 Profile', 'Pitch 1 Blurb', '1', '0', 'TRUE')`);
		}).then(() => {
			return client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
			'2', 'Pitch 2', 'Pitch 2 Video URL', 'Pitch 2 Website URL', 'Pitch 2 Profile', 'Pitch 2 Blurb', '2', '2', 'FALSE')`);
		}).then(() => {
			done();
		}).catch((err) => {
			console.error(err);
		});
	    console.log('Success');
	});

	afterEach(() => {
		return client.query('DROP TABLE IF EXISTS pitches');
	});

	it('should return all pitches', (done) => {
		supertest(app)
    	.get('/api/pitches?q=all')
    	.end((err, res) => {
			expect(res.status).to.equal(200);
    		expect(res.body.length).to.equal(2);
    		done();
        });
	});

	it('should return a pitch given its id', (done) => {
		supertest(app)
		.get('/api/pitches?q=pitch&pitchId=2')
		// .expect(200)
		.end((err, res) => {
			expect(res.statusCode).to.equal(200);
			// console.log('response body: ', res.body);
			expect(res.body[0].name).to.equal('Pitch 2');
			done();
		});
	});

	it('should return 404 for undefined routes', (done) => {
		supertest(app)
		.get('/api/pitches?q=dkjfslk')
		.end((err, res) => {
			expect(res.statusCode).to.equal(404);
			// console.log('status code:', res.statusCode);
			done();
		});
	});
});




















