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
