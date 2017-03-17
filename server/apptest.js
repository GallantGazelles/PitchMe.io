var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./request-handler.js');
var User = require('./db/User');
var Comments = require('./db/Comments');
// var router = express.Router();
var pg = require('pg');
var db = require('./db.js');

var app = express();
app.use(bodyParser.json());
// requestHandler.init();
app.get('/', requestHandler.handleRootGet);

app.post('/', requestHandler.handleRootPost);

app.get('/user', function(req, res) {
  User.getAllUsers()
  .then((results) => {
    console.log('promise works?', results.rows);
    res.json(results.rows)
  })
  .catch((error) => {
    console.error('something broke', error);
    res.end();
  })
  // res.end();
})

app.get('/getUser', function(req, res) {
  var username = req.body.username;
  User.getUserByUsername(username)
  .then((results)=> {
    res.json(results.rows);
  })
}

// app.get('/testDB', requestHandler.handleDBTest);

app.listen(8080, function() {
	console.log('listening to 8080');
});
