
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Task Description 0'},
        {description: 'Task Description 1', notes: 'Test Notes 1'},
        {description: 'Task Description 2', completed: true},
        {description: 'Task Description 3', notes: 'Test Notes 3' },
        {description: 'Task Description 4' },
        {description: 'Task Description 5', notes: 'Test Notes 5' },
        {description: 'Task Description 6' },
        {description: 'Task Description 7', completed: true },
        {description: 'Task Description 8', notes: 'Test Notes 8', completed: true }
      ]);
    });
};
