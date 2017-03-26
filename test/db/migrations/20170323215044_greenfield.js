
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('profile').notNullable();
  }).then(() => {
  	return knex.schema.createTable('categories', (table) => {
  		table.increments();
  		table.string('name').notNullable().unique();
  	});
  }).then(() => {
  	return knex.schema.createTable('comments', (table) => {
  		table.increments();
  		table.string('comment');
  		table.integer('user_id').notNullable();
  		table.integer('pitch_id').notNullable();
  		table.timestamp('timestamp').defaultTo(knex.fn.now());
  	});
  }).then(() => {
  	return knex.schema.createTable('followers', (table) => {
  		table.increments();
  		table.integer('user_id');
  		table.integer('pitch_id');
  	});
  }).then(() => {
  	return knex.schema.createTable('investments', (table) => {
  		table.increments();
  		table.integer('user_id');
  		table.integer('pitch_id');
  	});
  }).then(() => {
  	return knex.schema.createTable('pitches', (table) => {
  		table.increments();
  		table.integer('user_id');
  		table.string('name').notNullable().unique();
  		table.string('video');
  		table.string('website');
  		table.string('profile');
  		table.string('blurb');
  		table.integer('category_id');
  		table.boolean('investment_status').defaultTo('FALSE');
  	});
  }).then(() => {
  	return knex.schema.createTable('votes', (table) => {
  		table.increments();
  		table.integer('user_id');
  		table.integer('pitch_id');
  		table.integer('vote_type');
  		table.timestamp('timestamp').defaultTo(knex.fn.now());
  	});
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
  .then(() => {
  	return knex.schema.dropTable('categories');
  }).then(() => {
  	return knex.schema.dropTable('comments');
  }).then(() => {
  	return knex.schema.dropTable('followers');
  }).then(() => {
  	return knex.schema.dropTable('investments');
  }).then(() => {
  	return knex.schema.dropTable('pitches');
  }).then(() => {
  	return knex.schema.dropTable('votes');
  });
};
