const router = require('express').Router();
const Users = require('./routes/Users');

// Rest API to /api

// USERS
router.get('/users', Users.getAllUsers);
// router.post('/users', users.something.post);
// router.put('/users', users.something.put);
// router.delete('/users', users.something.delete);

// COMMENTS
// router.get('/comments', comments.something.get);
// router.post('/comments', comments.something.post);
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
// router.get('/followers', followers.something.get);
// router.post('/followers', followers.something.post);


module.exports = router;