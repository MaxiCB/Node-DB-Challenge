
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, name: 'Test Context Name 0'},
        {id: 2, name: 'Test Context Name 1'},
        {id: 3, name: 'Test Context Name 2'}
      ]);
    });
};
