var pg = require('pg');

// var connectionString = process.env.DATABASE_URL || 'postgress://localhost:8080';
// console.log('connectionString: ', connectionString);
var config = {
	database: 'ggdb'
};
// config

var client = new pg.Client(config);

client.connect();
var query2 = client.query('SELECT * FROM testsssss')
.then(function(results) {
    console.log(results.rows);
});