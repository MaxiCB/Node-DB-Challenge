
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Task Description 0',notes: 'Test Notes 0', completed: false},
        {id: 2, description: 'Task Description 1', notes: 'Test Notes 1', completed: true},
        {id: 3, description: 'Task Description 2', notes: 'Test Notes 2', completed: true},
        {id: 4, description: 'Task Description 3', notes: 'Test Notes 3', completed: false },
        {id: 5, description: 'Task Description 4', notes: 'Test Notes 4', completed: true },
        {id: 6, description: 'Task Description 5', notes: 'Test Notes 5', completed: false },
        {id: 7, description: 'Task Description 6', notes: 'Test Notes 6', completed: true},
        {id: 8, description: 'Task Description 7', notes: 'Test Notes 7', completed: true },
        {id: 9, description: 'Task Description 8', notes: 'Test Notes 8', completed: true }
      ]);
    });
};
