'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('developers', function(t) {
    t.increments('id').primary();
    //linkedin
    t.string('email');
    t.string('fname');
    t.string('lname');
    t.string('location');
    t.string('linkedin_url');
    t.string('photo_url');
    t.json('skills');
    t.json('education');
    t.json('positions');
    //github
    t.string('github_url');
    t.string('github_photo');
    t.string('github_blog');
    t.string('hireable');
    t.string('public_repos');
    t.string('total_private_repos');
    t.string('followers');
    t.string('following');
    t.string('created_at');
    t.string('updated_at');
    t.string('public_gists');
    t.string('linkedin');
    t.string('github');
  }).then(function() {
    console.log('created developers table.');
  });

  knex.schema.createTable('employers', function(t) {
    t.increments('id').primary().notNullable;
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.string('name');
    t.string('location');
    t.string('image');
    t.string('contact_person');
    t.string('contact_email');
    t.string('contact_phone');
  }).then(function() {
    console.log('created employers table.');
  });

  knex.schema.createTable('positions', function(t) {
    t.increments('id').primary().notNullable;
    t.integer('employers_id').notNullable();
    t.string('position').notNullable();
    t.string('location').notNullable();
    t.string('required').notNullable();
    t.string('preferred').notNullable();
    t.string('salary').notNullable();
    t.string('description').notNullable();
    t.string('time').notNullable();
    t.string('company_size').notNullable();
  }).then(function() {
    console.log('created positions table.');
  });

};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('positions').then(function() {});
  knex.schema.dropTable('employers').then(function() {});
  knex.schema.dropTable('developers').then(function() {});
};
