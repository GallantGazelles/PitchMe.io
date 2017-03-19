const db = require('./../db/User');

module.exports.getAllUsers = (req, res, next) => {
  console.log(req.query.user);
  db.getAllUsers().then(results => res.send(results.rows))
}