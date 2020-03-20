
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Resource Name 0', description: 'Resource Description 0'},
        {id: 2, name: 'Resource Name 1', description: 'Resource Description 1'},
        {id: 3, name: 'Resource Name 2', description: 'Resource Description 2'}
      ]);
    });
};
