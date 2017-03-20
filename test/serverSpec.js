var supertest = require('supertest');
var should = require('should');
var expect = require('chai').expect;

var server = supertest.agent('http://localhost:8080');

describe('sample test', function() {
	it('should return homepage', function(done) {
		server.get('/')
		.expect('Content-type', /json/)
		.expect(200)
		.end(function(err, res) {
			expect(res.status).to.equal(200);
			expect(!!res.body.error).to.equal(false);
			console.log('res body error: ', res.body.error);
			done();
		});
	});
	it('should ')
});

