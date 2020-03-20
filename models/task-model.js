const db = require("../data/dbConfig");

const getTasks = () => {
  const task = db("tasks");
  return task;
};

const addTask = task => {
  return db("tasks").insert(task);
};

const addTaskProjects = task => {
  return db("project_tasks").insert(task);
};

const getTaskById = id => {
  let task = db("tasks")
    .where({ id })
    .first();
  return task;
};

const getProjectTasks = id => {
  return db("project_tasks as t")
    .join("tasks as k", "k.id", "t.task_id")
    .select("k.*")
    .where("t.project_id", id);
};

const updateTask = (id, task) => {
  return db("resources")
    .where("id", id)
    .update(task);
};

const deleteTask = id => {
  return db("resource")
    .where("id", id)
    .del();
};

module.exports = {
  getTasks,
  addTask,
  addTaskProjects,
  getTaskById,
  getProjectTasks,
  updateTask,
  deleteTask
};
