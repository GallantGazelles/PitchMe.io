const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const db = require('./db.js');

const app = express();
const router = require('./routes.js');

app.use('/', express.static(path.join(__dirname, '/../client/')));
app.use('/pitch', express.static(path.join(__dirname, '/../client/')));
app.use('/signup', express.static(path.join(__dirname, '/../client/')));
app.use('/signin', express.static(path.join(__dirname, '/../client/')));

app.use(bodyParser.json());

app.use('/api', router);

app.listen(8080, function() {
	console.log('listening to 8080');
});

module.exports = app;