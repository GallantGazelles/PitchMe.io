var express = require('express');


var app = express();
app.get('/', function(req, res) {
	res.send("HELlO WORLD");
});

app.listen(3000, function() {
	console.log("listening to 3000");
});