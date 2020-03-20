
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Test Name 0'},
        {id: 2, name: 'Test Name 1', description: "Test Description 1"},
        {id: 3, name: 'Test Name 2', description: "Test Description 2"},
        {id: 4, name: 'Test Name 3', description: "Test Description 3", completed: true},
        {id: 5, name: 'Test Name 4', completed: true},
        {id: 6, name: 'Test Name 5', completed: true}
      ]);
    });
};
