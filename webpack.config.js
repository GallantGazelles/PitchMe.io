var webpack = require('webpack');
var path = require('path');

// var SRC_DIR = path.resolve(__dirname, 'client/src');
// var DIST_DIR = path.resolve(__dirname, 'client/dist');


//Testing for redux.
var SRC_DIR = path.resolve(__dirname, 'redux/src');
var DIST_DIR = path.resolve(__dirname, 'redux/dist');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?/,
      include: SRC_DIR,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;

//./node_modules/.bin/webpack -d --watch