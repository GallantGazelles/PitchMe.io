var express = require('express');
var pg = require('pg');
// var db = require('./db.js');

// const createDummyComments;
// const createDummyPitches;
// const createDummyFollowers;
// const createDummyCategories;
// const createDummyInvestments;
// const createDummyVotes;
// const createDummySessions;

const config = {
  database: 'ggdb',
  max: 10
}

let pool = new pg.Pool(config);

pool.connect((err, client, done) => {

  if (err) {
    return console.error(err);
  } else {
    client.query('DROP TABLE IF EXISTS users, pitches, followings, categories, votes, investments, sessions, comments')
          .then(
            client.query('CREATE TABLE IF NOT EXISTS users \
              ( id SERIAL PRIMARY KEY, \
              username VARCHAR(30), \
              password VARCHAR(40), \
              profile TEXT,\
              CONSTRAINT usrename_unique UNIQUE (username) \
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS pitches \
              (id SERIAL PRIMARY KEY, \
              user_id INTEGER, \
              name VARCHAR(40), \
              video TEXT, \
              website TEXT, \
              profile TEXT, \
              blurb TEXT, \
              category_id INTEGER, \
              votes INTEGER, \
              investment_status BOOL \
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS followings \
              (id SERIAL PRIMARY KEY, \
              user_id INTEGER, \
              pitch_id INTEGER \
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS categories \
              (id SERIAL PRIMARY KEY, \
              name VARCHAR(20) \
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS votes \
              (id SERIAL PRIMARY KEY, \
              user_id INTEGER, \
              pitch_id INTEGER, \
              vote_type INTEGER\
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS investments \
              (id SERIAL PRIMARY KEY, \
              user_id INTEGER, \
              pitch_id INTEGER \
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS sessions \
              (id SERIAL PRIMARY KEY, \
              user_id INTEGER, \
              cookie VARCHAR (60), \
              salt VARCHAR(40), \
              timestamp TIMESTAMP\
              )'
            )
          )
          .then(
            client.query('CREATE TABLE IF NOT EXISTS comments \
              (id SERIAL PRIMARY KEY, \
              comment TEXT, \
              user_id INTEGER, \
              pitch_id INTEGER, \
              timestamp TIMESTAMP\
              )'
            )
          )
          .then(console.log('Success'))
          .catch(err => console.log(err))
  }
});