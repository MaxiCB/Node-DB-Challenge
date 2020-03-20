
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_tasks').insert([
        {id: 1, project_id: 1, task_id: 1},
        {id: 2, project_id: 1, task_id: 1},
        {id: 3, project_id: 1, task_id: 1},
        {id: 4, project_id: 1, task_id: 1 },
        {id: 5, project_id: 1, task_id: 1},
        {id: 6, project_id: 1, task_id: 1},
        {id: 7, project_id: 1, task_id: 1},
        {id: 8, project_id: 1, task_id: 1},
        {id: 9, project_id: 1, task_id: 1}
      ]);
    });
};