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

module.exports.postUsers = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let profile = req.body.profile;
  User.createUser(username, password, profile)
  .then(results => res.send('User created!'))
  .catch(error => res.send('User already exists!'));
};

module.exports.deleteUsers = (req, res, next) => {
  let userId = req.body.userId;
  User.deleteUserByUserId(userId)
  .then(results => res.send('User successfully deleted!'))
  .catch(error => res.send('Error in deleting user!'));
};

module.exports.putUsers = (req, res, next) => {
  let userId = req.body.userId;
  let password = req.body.password;
  let profile = req.body.profile;

  User.getUserPassword(userId)
  .then((results) => {
    if (results.rows !== password) {
      return res.send('Invalid Password');
    } else {
      User.editUser(userId, password, profile)
    }
  })
  .then((results) => res.send('Profile successfully changed!'))
  .catch( error => res.send('An error occurred in changing your profile!'))
}