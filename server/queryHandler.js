const pg = require('pg');
const db = require('./db.js');


const connectionString = 'postgres://localhost:5432/ggdb';

module.exports.getAllCategories = (req, res, next) => {
	db.query('SELECT * FROM categories')
	.then(function(results) {
		console.log('dada');
		res.status(200).json(results.rows);
	});
};

module.exports.addCategory = (req, res, next) => {
	db.query(`INSERT INTO categories (name) VALUES ('${req.body.categoryName}')`)
	.then(function(results) {
		res.status(200).json('successfully added category');
	})
	.catch(function(err) {
		res.status(400).json('Did you try to add an existing category name?');
	});
};

module.exports.deleteCategory = (req, res, next) => {
	db.query(`DELETE FROM categories WHERE name=('${req.body.categoryName}')`)
	.then(function(results) {
		res.status(200).json('successfully deleted category');
	})
	.catch(function(err) {
		res.status(400).json('Can not delete the category');
	});
};
