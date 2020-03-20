const express = require('express');

const ProjectsRouter = require('./routes/project-route');
const TaskRouter = require('./routes/tasks-route');
const ResourceRouter = require('./routes/resource-route');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);
module.exports = server;