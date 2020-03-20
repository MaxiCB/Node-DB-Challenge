const db = require("../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const addResource = resource => {
  return db("resources").insert(resource);
};

const getResourceById = id => {
  return db("resources")
    .where({ id })
    .first();
};

const addProjectResource = resource => {
  return db("project_resources").insert(resource);
};

const getProjectResources = id => {
  return db("project_resources as p")
    .join("resources as r", "r.id", "p.resource_id")
    .select("r.*")
    .where("p.project_id", id);
};

const updateResource = (id, resource) => {
  return db("resources").where('id', id).update(resource);
}

const deleteResource = id => {
  return db("resource").where('id', id).del();
}

module.exports = {
  getResources,
  addResource,
  getResourceById,
  addProjectResource,
  addResource,
  getProjectResources,
  updateResource,
  deleteResource
};
