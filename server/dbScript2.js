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
    client.query('CREATE TABLE IF NOT EXISTS users \
      ( id SERIAL PRIMARY KEY, \
      username VARCHAR(30), \
      password VARCHAR(40), \
      profile TEXT,\
      CONSTRAINT username_unique UNIQUE (username) \
      )')
    .then(
      client.query(`INSERT INTO users (username, password, profile) VALUES ("User1", "123", "Profile for User1")`)
    )
    .then(
      client.query(`INSERT INTO users (username, password, profile) VALUES ("User2", "123", "Profile for User2")`)
    )

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
      )')
    .then(
      client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
        "1", "Pitch 1", "Pitch 1 Video URL", "Pitch 1 Website URL", "Pitch 1 Profile", "Pitch 1 Blurb", "1", "0", "TRUE")`)
    )
    .then(
      client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
        "2", "Pitch 2", "Pitch 2 Video URL", "Pitch 2 Website URL", "Pitch 2 Profile", "Pitch 2 Blurb", "2", "2", "FALSE")`)
    )
    client.query('CREATE TABLE IF NOT EXISTS followers \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      pitch_id INTEGER \
      )')
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ("1", "1")`)
    )
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ("1", "2")`)
    )
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ("2", "2")`)
    )
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ("2", "1")`)
    )

    client.query('CREATE TABLE IF NOT EXISTS categories \
      (id SERIAL PRIMARY KEY, \
      name VARCHAR(20) \
      )'
    )
    client.query('CREATE TABLE IF NOT EXISTS votes \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      pitch_id INTEGER, \
      vote_type INTEGER\
      )'
    )
    client.query('CREATE TABLE IF NOT EXISTS investments \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      pitch_id INTEGER \
      )'
    )
    client.query('CREATE TABLE IF NOT EXISTS sessions \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      cookie VARCHAR (60), \
      salt VARCHAR(40), \
      timestamp TIMESTAMP\
      )'
    )
    client.query('CREATE TABLE IF NOT EXISTS comments \
      (id SERIAL PRIMARY KEY, \
      comment TEXT, \
      user_id INTEGER, \
      pitch_id INTEGER, \
      timestamp TIMESTAMP\
      )'
    )

    console.log('Success');

    // dummy data
  }
});