const pg = require('pg');
const db = require('../db.js');

const connectionString = 'postgres://localhost:5432/ggdb';

module.exports.getAllComments = () => {
  pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting all from users table");
        } else {
          client.query("SELECT * FROM comments")
          .then((results) => {
              res.status(200).json(results.rows);
          });
        }
    });
}

module.exports.getCommentsByPitchName = (pitchName) => {
  pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting users by pitch_id from users table");
        } else {
          client.query(`SELECT comments.* FROM comments, pitches where comments.pitch_id = pitches.id AND pitches.name = '${pitchName}' ORDER BY timestamp DESC`)
          .then(function(results) {
              res.status(200).json(results.rows);
          });
        }
    });
}

module.exports.getCommentsByPitchId = (pitchId) => {
  pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting users by pitch_id from users table");
        } else {
          client.query(`SELECT comments.* FROM comments, pitches where comments.pitch_id = '${pitchId}' ORDER BY timestamp DESC`)
          .then(function(results) {
              res.status(200).json(results.rows);
          });
        }
    });
}

module.exports.getCommentsByUserId = (userId) => {
  pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting users by pitch_id from users table");
        } else {
          client.query(`SELECT comments by user_id = '${userId}'`)
          .then((results) => {
              res.status(200).json(results.rows);
          });
        }
    });
}

module.exports.deleteCommentByCommentId = (id) => {
  pg.connect(connectionString, (err, client) => {
    if(err) {
      console.log("error in deleting a user from users table");
    } else {
      client.query(`DELETE FROM comments where id = '${id}'`)
      .then(function(results) {
        res.status(200).send('Comments has been deleted!');
      })
    }
  })
}

module.exports.createCommentInComments = (userId, pitchId, comment) => {
  pg.connect(connectionString, (err, client) => {
    if(err) {
      console.log('Could not create a new user');
    } else {
      client.query(`INSERT INTO comments (user_id, pitch_id, comment) VALUES ('${userId}', '${pitchId}', '${comment}')`)
      .then((results) => {
        res.status(200).send('Created new user!');
      })
    }
  })
}