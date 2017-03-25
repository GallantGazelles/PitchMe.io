
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'User1', password:'123', profile: 'Profile for User1'},
        {username: 'User2', password:'123', profile: 'Profile for User2'},
        {username: 'User3', password:'123', profile: 'Profile for User3'},
      ]);
    }).then(()=> {
      return knex('pitches').del()
      .then(() => {
        return knex('pitches').insert([
          {user_id: 1, name: 'Pitch 1', video: 'Pitch 1 Video URL', website: 'Pitch 1 Website URL', profile: 'Pitch 1 Profile', blurb: 'Pitch 1 Blurb', category_id: '1', votes: '0',investment_status:'TRUE'},
          {user_id: 2, name: 'Pitch 2', video: 'Pitch 2 Video URL', website: 'Pitch 2 Website URL', profile: 'Pitch 2 Profile', blurb: 'Pitch 2 Blurb', category_id: '2', votes: '2',investment_status:'FALSE'}
          ]);
      });
    }).then(()=> {
      return knex('followers').del()
      .then(() => {
        return knex('followers').insert([
          {user_id: 1, pitch_id: 1},
          {user_id: 1, pitch_id: 2},
          {user_id: 2, pitch_id: 2},
          {user_id: 2, pitch_id: 1}
          ]);
      });
    }).then(()=> {
      return knex('categories').del()
      .then(() => {
        return knex('categories').insert([
          {name: 'Tech'},
          {name: 'Games'},
          {name: 'Books'},
          {name: 'iPhone'},
          {name: 'Android'},
          {name: 'Productivity'}
          ]);
      });
    }).then(()=> {
      return knex('votes').del()
      .then(() => {
        return knex('votes').insert([
          {user_id: 1, pitch_id: 1, vote_type: 1},
          {user_id: 1, pitch_id: 2, vote_type: -1},
          {user_id: 2, pitch_id: 1, vote_type: -1},
          {user_id: 2, pitch_id: 2, vote_type: 0}
          ]);
      });
    }).then(()=> {
      return knex('investments').del()
      .then(() => {
        return knex('investments').insert([
          {user_id: 1, pitch_id: 1},
          {user_id: 1, pitch_id: 2},
          {user_id: 2, pitch_id: 1},
          {user_id: 2, pitch_id: 3}
          ]);
      });
    }).then(()=> {
      return knex('comments').del()
      .then(() => {
        return knex('comments').insert([
          {comment: 'Hello', user_id: 1, pitch_id: 1},
          {comment: 'Yo', user_id: 2, pitch_id: 1},
          {comment: 'What', user_id: 3, pitch_id: 1},
          {comment: 'No', user_id: 1, pitch_id: 1}
          ]);
      });
    });
};
