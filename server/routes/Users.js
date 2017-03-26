const User = require('./../db/User');
var Util = require('../util.js');

module.exports.getUsers = (req, res, next) => {
  const { q, user_id } = req.query;
  if (q === 'users') {
    User.getAllUsers()
        .then(results => res.send(results.rows))
        .catch(error => res.status(404).send('Oops!'));
  } else if (q === 'user') {
    User.getUserByUserId(user_id)
        .then(results=> { 
          res.send(results.rows)})
        .catch(error => res.status(404).send('Oops!'));
  } else {
    res.status(404).send('Bad Query');
  }
};

module.exports.postUsers = (req, res, next) => {
  const { username, password, profile } = req.body;
  console.log(username, password, profile);
  let salt = Util.createSalt();
  let hashedPassword = Util.createHash(password, salt);
  User.createUser(username, hashedPassword, profile)
      .then(results => res.send('User created!'))
      .catch(error => res.status(404).send('User already exists!'));
};

module.exports.deleteUsers = (req, res, next) => {
  const userId = req.body.userId;

  User.deleteUserByUserId(userId)
      .then(results => res.send('User successfully deleted!'))
      .catch(error => res.status(404).send('Error in deleting user!'));
};

module.exports.deleteUserByName = (req, res, next) => {
  const username = req.query.username;
  User.deleteUserByUsername(username)
      .then(results => {
        res.status(200).send('User successfully deleted!')}
        )
      .catch(error => res.status(404).send('Error in deleting user!'));
};

//change user's profile
module.exports.putUsers = (req, res, next) => {
  const { username, password, profile } = req.body;
  User.getUserPasswordByName(username)
      .then((results) => {
        if (results.rows[0].password !== password) {
          throw new Error('Invalid Password!');
        } else {
          User.editUserProfileByUsername(username, profile)
          .then(results => res.send('Profile successfully changed!'
          )).catch( error => res.status(404).send('An error occurred in changing your profile!'));
        }
      })
      .catch( error => res.status(404).send('An error occurred in changing your profile!'))
};

module.exports.getUserProfile = (req, res, next) => {
  User.getUserProfile(req.query.userId)
  .then(results => res.send(results))
  .catch(error => res.status(404).send('Error in getting user profile!'));
}




