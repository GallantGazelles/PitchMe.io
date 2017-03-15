var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./request-handler.js');

var app = express();
app.use(bodyParser.json());

app.get('/', requestHandler.handleRootGet);


app.post('/', requestHandler.handleRootPost);

app.listen(8080, function(){
	console.log('listening to 8080');
});
//for Heroku: with process.env.PORT, type in the terminal: export PORT=1234, we can re-run the app on port 1234
// app.listen(process.env.PORT, function() {
// 	console.log("listening to 3000");
// });
