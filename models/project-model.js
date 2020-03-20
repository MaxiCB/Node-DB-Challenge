const db = require("../data/dbConfig");

const getProjects = () => {
  return db("projects");
};

const addProject = project => {
  return db("projects").insert(project);
};

const getProjectById = id => {
  return db("projects")
    .where({ id })
    .first();
};

const updateProject = (id, project) => {
  return db("resources").where('id', id).update(project);
}

const deleteProject = id => {
  return db("projects").where('id', id).del();
}

module.exports = {
  getProjects,
  addProject,
  getProjectById,
  updateProject,
  deleteProject
};
