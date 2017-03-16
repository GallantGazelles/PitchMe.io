var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./request-handler.js');
// var router = express.Router();
var pg = require('pg');
var db = require('./db.js');

var app = express();
app.use(bodyParser.json());
console.log('im in');
// requestHandler.init();
app.get('/', requestHandler.handleRootGet);


app.post('/', requestHandler.handleRootPost);

// app.get('/testDB', requestHandler.handleDBTest);

app.listen(8080, function(){
	console.log('listening to 8080');
});
