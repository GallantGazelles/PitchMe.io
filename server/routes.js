const router = require('express').Router();
const Users = require('./routes/Users');
const Followers = require('./routes/Followers');
const Comments = require('./routes/Comments');

// Rest API to /api

// USERS
//Get all users
router.get('/users', Users.getUsers);

//Create new User
router.post('/users', Users.postUsers);

//Edit User information
router.put('/users', Users.putUsers);

//Remove User from DB
router.delete('/users', Users.deleteUsers);

// COMMENTS
router.get('/comments', Comments.getComments);
// router.post('/comments', Comments.createCommentInComments);
// router.put('/comments', comments.something.put);
// router.delete('/comments', comments.something.delete);

// PITCHES
// router.get('/pitches', pitches.something.get);
// router.post('/pitches', pitches.something.post);
// router.put('/pitches', pitches.something.put);
// router.delete('/pitches', pitches.something.delete);

// CATEGORIES
// router.get('/categories', categories.something.get);

// FOLLOWERS
router.get('/followers', Followers.getFollowers);
router.post('/followers', Followers.postFollower);
router.delete('/followers', Followers.removeFollower);


module.exports = router;