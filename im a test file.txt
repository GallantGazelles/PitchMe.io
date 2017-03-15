var express = require('express');

//for first PR test
var app = express();
app.get('/', function(req, res) {
	res.send("HELlO WORLD");
});
//with process.env.PORT, type in the terminal: export PORT=1234, we can re-run the app on port 1234
app.listen(process.env.PORT, function() {
	console.log("listening to 3000");
});