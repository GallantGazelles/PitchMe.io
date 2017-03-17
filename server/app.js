var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./request-handler.js');
var queryHandler = require('./queryHandler.js');
// var router = express.Router();
var pg = require('pg');
var db = require('./db.js');

var app = express();
app.use(bodyParser.json());
console.log('im in');
// requestHandler.init();
//need to change the route name later
app.get('/home', requestHandler.handleRootGet);

app.get('/test', queryHandler.getAllCategories);
// app.post('/signup', requestHandler.handleSignUp);

app.post('/', requestHandler.handleRootPost);

app.post('/cat', queryHandler.addCategory);

app.delete('/cat', queryHandler.deleteCategory);

app.listen(8080, function(){
	console.log('listening to 8080');
});
