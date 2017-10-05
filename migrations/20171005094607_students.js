'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('mantra').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
