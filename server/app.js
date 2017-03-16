var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./request-handler.js');
// var router = express.Router();
var pg = require('pg');

var app = express();
app.use(bodyParser.json());

requestHandler.init();
app.get('/', requestHandler.handleRootGet);


app.post('/', requestHandler.handleRootPost);

// app.get('/testDB', requestHandler.handleDBTest);

app.listen(8080, function(){
	console.log('listening to 8080');
});
