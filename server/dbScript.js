var express = require('express');
var pg = require('pg');

const config = {
  database: 'ggdb',
  max: 10
};

let pool = new pg.Pool(config);

pool.connect((err, client, done) => {
  if (err) {
    return console.error(err);
  } else {
    client.query('DROP TABLE IF EXISTS users, pitches, followers, categories, votes, investments, sessions, comments');

    client.query('CREATE TABLE IF NOT EXISTS users \
      ( id SERIAL PRIMARY KEY, \
      username VARCHAR(30), \
      password VARCHAR(40), \
      profile TEXT,\
      CONSTRAINT username_unique UNIQUE (username) \
      )')
    .then(
      client.query(`INSERT INTO users (username, password, profile) VALUES ('User1', '123', 'Profile for User1')`)
    )
    .then(
      client.query(`INSERT INTO users (username, password, profile) VALUES ('User2', '123', 'Profile for User2')`)
    )
    .then(
      client.query(`INSERT INTO users (username, password, profile) VALUES ('User3', '123', 'Profile for User3')`)
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
      investment_status BOOL, \
      CONSTRAINT pitchname_unique UNIQUE (name)\
      )')
    .then(
      client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
        '1', 'Pitch 1', 'Pitch 1 Video URL', 'Pitch 1 Website URL', 'Pitch 1 Profile', 'Pitch 1 Blurb', '1', '0', 'TRUE')`)
    )
    .then(
      client.query(`INSERT INTO pitches (user_id, name, video, website, profile, blurb, category_id, votes, investment_status) VALUES (
        '2', 'Pitch 2', 'Pitch 2 Video URL', 'Pitch 2 Website URL', 'Pitch 2 Profile', 'Pitch 2 Blurb', '2', '2', 'FALSE')`)
    )

    client.query('CREATE TABLE IF NOT EXISTS followers \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      pitch_id INTEGER \
      )')
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ('1', '1')`)
    )
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ('1', '2')`)
    )
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ('2', '2')`)
    )
    .then(
      client.query(`INSERT INTO followers (user_id, pitch_id) VALUES ('2', '1')`)
    )

    client.query('CREATE TABLE IF NOT EXISTS categories \
      (id SERIAL PRIMARY KEY, \
      name VARCHAR(20), \
      CONSTRAINT categoryname_unique UNIQUE (name)\
      )'
    ).then(
      client.query(
        `INSERT INTO categories (name) VALUES ('Tech'), ('Games'), ('Books'), ('iPhone'), ('Android'), ('Productivity')`
      )
    );

    client.query('CREATE TABLE IF NOT EXISTS votes \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      pitch_id INTEGER, \
      vote_type INTEGER\
      )'
    ).then(
      client.query(
        `INSERT INTO votes (user_id, pitch_id, vote_type) VALUES ('1', '1', '1'), ('1', '2', '-1'), ('2', '1', '-1'), ('2', '2', '0')`
      )
    );

    client.query('CREATE TABLE IF NOT EXISTS investments \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      pitch_id INTEGER \
      )'
    ).then(
      client.query(
        `INSERT INTO investments (user_id, pitch_id) VALUES ('1', '1'), ('1', '2'), ('2', '1'), ('2', '3')`
      )
    );

    client.query('CREATE TABLE IF NOT EXISTS sessions \
      (id SERIAL PRIMARY KEY, \
      user_id INTEGER, \
      cookie VARCHAR (60), \
      salt VARCHAR(40), \
      timestamp TIMESTAMP DEFAULT current_timestamp\
      )'
    ).then(
      client.query(
        `INSERT INTO sessions (user_id, cookie, salt) VALUES ('1', '8c429a', '7438'), ('2', '43bca4', '7438'), ('3', 'a4bde', '7438'), ('4', 'e42dfb', '7438')`
      )
    );

    client.query('CREATE TABLE IF NOT EXISTS comments \
      (id SERIAL PRIMARY KEY, \
      comment TEXT, \
      user_id INTEGER, \
      pitch_id INTEGER, \
      timestamp TIMESTAMP DEFAULT current_timestamp \
      )'
    ).then(
      client.query(
        `INSERT INTO comments (comment, user_id, pitch_id) VALUES ('Hello', '1', '1'), ('Yo', '2', '1'), ('What', '3', '1'), ('No!', '1', '1')`
      )
    );

    console.log('Success');
  }
});