const User = require('./../db/User');

module.exports.getUsers = (req, res, next) => {
  console.log(req.query.user_id);
  let q = req.query.q;
  let userId = req.query.userId
  if (q === 'users') {
    User.getAllUsers().then(results => res.send(results.rows)).catch(error => res.send('Oops!'))
  } else if (q === 'user') {
    User.getUserByUserId(req.query.user_id).then(results=> res.send(results.rows)).catch(error => res.send('Oops!'));
  } else {
    res.status(404).send('Bad Query');
  }
};

module.exports.postUser = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let profile = req.body.profile;
  User.createUser(username, password, profile)
  .then(results => res.send('User created!'))
  .catch(error => res.send('User already exists!'));
};

module.exports.putUser = (req, res, next) => {

};

module.exports.deleteUser = (req, res, next) => {
  let userId
};