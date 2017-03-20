const router = require('express').Router();
const Users = require('./routes/Users');
const Followers = require('./routes/Followers');
const Comments = require('./routes/Comments');

// Rest API to /api

// USERS
router.get('/users', Users.getAllUsers);
// router.post('/users', users.something.post);
// router.put('/users', users.something.put);
// router.delete('/users', users.something.delete);

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


module.exports = router;