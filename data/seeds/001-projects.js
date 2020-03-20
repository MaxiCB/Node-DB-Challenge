
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Test Name 0', description: "Test Description 0", completed: false},
        {id: 2, name: 'Test Name 1', description: "Test Description 1", completed: true},
        {id: 3, name: 'Test Name 2', description: "Test Description 3", completed: false},
        {id: 4, name: 'Test Name 3', description: "Test Description 3", completed: true},
        {id: 5, name: 'Test Name 4', description: "Test Description 4", completed: false},
        {id: 6, name: 'Test Name 5', description: "Test Description 5", completed: true}
      ]);
    });
};
