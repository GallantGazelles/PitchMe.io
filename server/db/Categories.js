const pg = require('pg');
const db = require('../db.js');

module.exports.getAllCategories = () => {
  return db.query("SELECT name FROM categories");
};

module.exports.addCategory = (categoryName) => {
  return db.query(`INSERT INTO categories (name) VALUES ('${categoryName}')`);
};

module.exports.deleteCategory = (categoryName) => {
	return db.query(`DELETE FROM categories WHERE categoryName='${categoryName}'`);
};