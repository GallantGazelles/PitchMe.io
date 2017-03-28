process.env.NODE_ENV = 'test';
var supertest = require('supertest');
var expect = require('chai').expect;
var app = require('../server/app.js');
var knex = require('./db/knex.js').knex;


describe('test homepage', () => {
	it('should return homepage', (done) => {
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
});

describe('test users table', () => {
	beforeEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			knex.migrate.latest()
			.then(() => {
				return knex.seed.run()
				.then(() => {
					done();
				});
			});
		});
	});

	afterEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			done();
		});
	});
	
    //users GET:
	it('should return all users', (done) => {
		supertest(app)
		.get('/api/users?q=users')
		.end((err,res) => {
			if(err) {
				return done(err);
			}
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

	//users POST:
	it('should be able to add non-existing user', (done) => {
		supertest(app)
		.post('/api/users')
		.send({username: 'Alison', password: 'test', profile: 'helloYo'})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			done();
		});
	});

	it('should not be able to add existing user', (done) => {
		supertest(app)
		.post('/api/users')
		.send({username: 'Alison', password: 'test', profile: 'helloYo'})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			supertest(app)
			.post('/api/users')
			.send({username: 'Alison', password: 'test', profile: 'helloYo'})
			.end((err, res) => {
				if(err) {
				    return done(err);
				}
				expect(res.status).to.equal(404);
				done();
			});
		});
	});
    //users PUT:
    it('should update user profile given username and password', (done) => {
    	supertest(app)
    	.put('/api/users')
    	.send({"username": "User1", "password": "123", "profile": "changed profile"})
    	.end((err, res) => {
    		if(err) {
				return done(err);
			}
    		expect(res.status).to.equal(200);
    		supertest(app)
    		.get('/api/users?q=user&user_id=1')
    		.end((err, res) => {
    			if(err) {
				    return done(err);
				}
    			expect(res.body[0].username).to.equal('User1');
    			expect(res.body[0].profile).to.equal('changed profile');
	    		done();
    		});
    	});
    });
    //user DELETE:
    it('should delete user given username', (done) => {
    	supertest(app)
    	.delete(`/api/users/?username=User1`)
    	.end((err, res) => {
    		if(err) {
				return done(err);
			}
    		expect(res.status).to.equal(200);
    		supertest(app)
    		.get('/api/users?q=users')
    		.end((err, res) => {
    			if(err) {
				  return done(err);
				}
    			expect(res.body.length).to.equal(2);
    			let usersAfterDelete = [];
    			res.body.forEach((item) => {
    				usersAfterDelete.push(item.username);
    			});
    			expect(usersAfterDelete.indexOf('User1')).to.equal(-1);
    			done();
    		});
    	});
    });
});


describe('test categories table', () => {

	beforeEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			knex.migrate.latest()
			.then(() => {
				return knex.seed.run()
				.then(() => {
					done();
				});
			});
		});
	});

	afterEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			done();
		});
	});
	
    //categories GET:
    it('should return all categories', (done) => {
    	supertest(app)
    	.get('/api/categories')
    	.end((err, res) => {
    		if(err) {
				return done(err);
			}
    		// console.log('response: ', response);
			expect(res.status).to.equal(200);
    		expect(res.body.length).to.equal(6);
    		done();
        });
    });
});

describe('test pitches table', () => {
	beforeEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			knex.migrate.latest()
			.then(() => {
				return knex.seed.run()
				.then(() => {
					done();
				});
			});
		});
	});

	afterEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			done();
		});
	});
    //pitches GET:
	it('should return all pitches', (done) => {
		supertest(app)
    	.get('/api/pitches?q=all')
    	.end((err, res) => {
    		if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
    		expect(res.body.length).to.equal(2);
    		done();
        });
	});

	it('should return a pitch given its id', (done) => {
		supertest(app)
		.get('/api/pitches?q=pitch&pitchId=2')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(res.body).to.deep.equal([{ id: 2,
			    user_id: 2,
			    name: 'Pitch 2',
			    video: 'Pitch 2 Video URL',
			    website: 'Pitch 2 Website URL',
			    profile: 'Pitch 2 Profile',
			    blurb: 'Pitch 2 Blurb',
			    category_id: 2,
			    votes: 2,
			    investment_status: false }]
		    );
			done();
		});
	});

	it('should return pitches given a category_id', (done) => {
		supertest(app)
		.get('/api/pitches?q=cat&cat=1')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(res.body).to.deep.equal([{ id: 1,
			    user_id: 1,
			    name: 'Pitch 1',
			    video: 'Pitch 1 Video URL',
			    website: 'Pitch 1 Website URL',
			    profile: 'Pitch 1 Profile',
			    blurb: 'Pitch 1 Blurb',
			    category_id: 1,
			    votes: 0,
			    investment_status: true }]
            );
			done();
		});
	});
	//pitches POST:
	it('should be able to create a new pitch', (done) => {
		supertest(app)
		.post('/api/pitches')
		.send({user_id: 3, name: 'new Pitch', video: 'new pitch video', website: 'new pitch website', profile: 'new pitch profile', blurb: 'new pitch blurb', category_id: 4})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			supertest(app)
	    	.get('/api/pitches?q=all')
	    	.end((err, res) => {
	    		if(err) {
					return done(err);
				}
	    		expect(res.body.length).to.equal(3);
	    		expect(res.body[2].user_id).to.equal(3);
	    		expect(res.body[2].name).to.equal('new Pitch');
	    		expect(res.body[2].video).to.equal('new pitch video');
	    		expect(res.body[2].website).to.equal('new pitch website');
	    		expect(res.body[2].profile).to.equal('new pitch profile');
	    		done();
            });

		});
	});
	//pitches PUT:
	it('should update pitch information', (done) =>{
		supertest(app)
		.put('/api/pitches')
		.send({pitchId: 1, userId: 1, newName: "Pitch 1",video: "Pitch 1 new video URL", website: "new website", profile: "new profile", blurb: "new blurb", catId: 1})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			supertest(app)
			.get('/api/pitches?q=pitch&pitchId=1')
			.end((err, res) => {
				if(err) {
					return done(err);
				}
				expect(res.body[0].id).to.equal(1);
				expect(res.body[0].name).to.equal('Pitch 1');
				expect(res.body[0].video).to.equal('Pitch 1 new video URL');
				expect(res.body[0].website).to.equal('new website');
				expect(res.body[0].profile).to.equal('new profile');
				expect(res.body[0].blurb).to.equal('new blurb');
				expect(res.body[0].category_id).to.equal(1);
				done();
		    });
		});
	});
	//pitches delete:
	it('should be able to delete a pitch given pitchId', (done) => {
		supertest(app)
		.delete('/api/pitches')
		.send({pitchId : 1})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			supertest(app)
			.get('/api/pitches?q=pitch&pitchId=1')
			.end((err, res) => {
				if(err) {
				    return done(err);
			    }
			    expect(res.body.length).to.equal(0);
			    supertest(app)
			    .get('/api/pitches?q=all')
			    .end((err, res) => {
			    	if(err) {
			    		return done(err);
			    	}
			    	expect(res.body.length).to.equal(1);
			    	done();
			    });
			});
		});
	});

	it('should return 404 for undefined routes', (done) => {
		supertest(app)
		.get('/api/pitches?q=dkjfslk')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(404);
			done();
		});
	});
});


describe('test comments table', () => {
	beforeEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			knex.migrate.latest()
			.then(() => {
				return knex.seed.run()
				.then(() => {
					done();
				});
			});
		});
	});

	afterEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			done();
		});
	});

	it('should return all comments given a userId', (done) => {
		supertest(app)
    	.get('/api/comments?userId=1')
    	.end((err, res) => {
    		if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
    		expect(res.body.length).to.equal(2);
    		expect(res.body[0].comment).to.equal('Hello');
    		expect(res.body[0].user_id).to.equal(1);
    		expect(res.body[0].pitch_id).to.equal(1);
    		//not using res.body[0] deep equal here because timestamp changes after re-run the dbScript
    		done();
        });
	});

	it('should return all comments given a pitchId', (done) => {
		supertest(app)
		.get('/api/comments?pitchId=1')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(res.body.length).to.equal(4);
			done();
		});
	});

	it('should post a comment', (done) => {
		supertest(app)
		.post('/api/comments')
		.send({userId: 6, pitchId: 1, comment: 'no comments'})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			supertest(app)
			.get('/api/comments?pitchId=1')
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(res.status).to.equal(200);
				expect(res.body.length).to.equal(5);
				done();
			})
		})
	})

	it('should return 404 for undefined routes', (done) => {
		supertest(app)
		.get('/api/comments?q=dkjfslk')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(404);
			done();
		});
	});
});

describe('test followers table', () => {
	beforeEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			knex.migrate.latest()
			.then(() => {
				return knex.seed.run()
				.then(() => {
					done();
				});
			});
		});
	});

	afterEach((done) => {
		knex.migrate.rollback()
		.then(() => {
			done();
		});
	});

	it('should return number of followers', (done) => {
		supertest(app)
    	.get('/api/followers?q=count&pitchId=1')
    	.end((err, res) => {
			expect(res.status).to.equal(200);
    		expect(+res.body[0].count).to.equal(2);
    		done();
        });
	});

	it('should return all followers given a pitchId', (done) => {
		supertest(app)
		.get('/api/followers?q=follows&pitchId=1')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(res.body).to.deep.equal([ { id: 1,
			    username: 'User1',
			    password: '123',
			    profile: 'Profile for User1' },
			  { id: 2,
			    username: 'User2',
			    password: '123',
			    profile: 'Profile for User2' } ]
			);
			done();
		});
	});

	it('should return all pitches from a user given userId', (done) => {
		supertest(app)
		.get('/api/followers?userId=2')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			expect(res.body.length).to.equal(2);
			expect(res.body).to.deep.equal([ { id: 2,
			    user_id: 2,
			    name: 'Pitch 2',
			    video: 'Pitch 2 Video URL',
			    website: 'Pitch 2 Website URL',
			    profile: 'Pitch 2 Profile',
			    blurb: 'Pitch 2 Blurb',
			    category_id: 2,
			    votes: 2,
			    investment_status: false },
			  { id: 1,
			    user_id: 1,
			    name: 'Pitch 1',
			    video: 'Pitch 1 Video URL',
			    website: 'Pitch 1 Website URL',
			    profile: 'Pitch 1 Profile',
			    blurb: 'Pitch 1 Blurb',
			    category_id: 1,
			    votes: 0,
			    investment_status: true } ]
		    );
			done();
		});
	});

	it('should return 404 for undefined routes', (done) => {
		supertest(app)
		.get('/api/followers?q=dkjfslk')
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(404);
			done();
		});
	});
	//follower POST:
	it('should be able to post a follower', (done) => {
		supertest(app)
		.post('/api/followers')
		.send({userId: 1, pitchId: 3})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			supertest(app)
			.get('/api/followers?q=count&pitchId=3')
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(+res.body[0].count).to.equal(1);
				done();
			});
		});
	});
	//follower DELETE:
	it('should be able to delete a following information', (done) => {
		supertest(app)
		.delete('/api/followers')
		.send({userId: 1, pitchId: 1})
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			expect(res.status).to.equal(200);
			supertest(app)
			.get('/api/followers?q=count&pitchId=1')
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				expect(+res.body[0].count).to.equal(1);
				done();
			});
		});
	});
});

