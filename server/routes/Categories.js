const db = require('./../db/Categories');

module.exports.getCategories = (req, res, next) => {
  db.getAllCategories()
    .then(results => {
      let response = results.rows.map(category => category.name);
      res.send(response);
    })
    .catch(error => res.status(404).send(error));
};