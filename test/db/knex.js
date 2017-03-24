var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

module.exports = {
	config: config,
	knex: require('knex')(config)
};
