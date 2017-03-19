const pg = require('pg');
const db = require('../db.js');

module.exports.getAllCategories = () => {
  //Returns promise with query
  return db.query("SELECT * FROM categories");
};

module.exports.addCategory = (categoryName) => {
  return db.query(`INSERT INTO categories (name) VALUES ('${categoryName}')`);
};