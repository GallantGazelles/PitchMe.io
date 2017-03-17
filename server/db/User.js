const pg = require('pg');
const db = require('../db.js');

const connectionString = 'postgres://localhost:5432/ggdb';

modules.export.getAllUsers = () => {
  pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting all from users table");
        } else {
          client.query("SELECT * FROM users")
          .then((results) => {
              res.status(200).json(results.rows);
          });
        }
    });
}

modules.export.getUserByPitchId = (pitchId) => {
  pg.connect(connectionString, function(err, client) {
        if(err) {
            console.log("error in selecting users by pitch_id from users table");
        } else {
          client.query(`SELECT users.* FROM users, followers where followers.pitch_id = ${pitchId} AND followers.user_id = users.id`)
          .then((results) => {
              res.status(200).json(results.rows);
          });
        }
    });
}

modules.export.deleteUserbyUserId = (userId) => {
  pg.connect(connectionString, function(err, client) {
    if(err) {
      console.log("error in deleting a user from users table");
    } else {
      client.query(`DELETE FROM users where user_id = ${userId}`)
      .then((results) => {
        res.status(200).send('User has been deleted!')
      })
    }
  })
}

modules.export.createUser = (username, password, profile) => {
  pg.connect(connectionString, function(err, client) {
    if(err) {
      console.log('Could not create a new user');
    } else {
      client.query(`INSERT INTO users (username, password, profile) VALUES ('${username}', '${password}', '${profile}')`)
      .then((results) => {
        res.status(200).send('Created new user!');
      })
    }
  })
}