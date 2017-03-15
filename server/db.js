var pg = require('pg');

var client = new pg.Client();

client.connect(function(err) {
	if(err) throw err;
//fill in the query string:
	client.query('SELECT $1::text as name', ['brianc'], function (err, result) {
    if (err) throw err;
    console.log(result.rows[0]);
    client.end(function(err) {
    	if(err) throw err;
    });
});



});