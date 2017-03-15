var express = require('express');

var handleRootGet = function(req, res, next) {
  res.send('Hellow world!');
};

var handleRootPost = function(req, res, next) {
	res.send('Hey POST request!');
};


module.exports = {
	handleRootGet: handleRootGet,
	handleRootPost: handleRootPost
};