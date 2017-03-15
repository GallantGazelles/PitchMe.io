var express = require('express');

//for first PR test
var app = express();
app.get('/', function(req, res) {
	res.send("HELlO WORLD");
});
app.post('/', function(req, res) {
	res.send('Hey, post request!');
});

//for Heroku: with process.env.PORT, type in the terminal: export PORT=1234, we can re-run the app on port 1234
// app.listen(process.env.PORT, function() {
// 	console.log("listening to 3000");
// });

app.listen(8080, function(){
	console.log('listening to 8080');
});