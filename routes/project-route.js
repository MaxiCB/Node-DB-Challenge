const express = require("express");

const router = express.Router();

const Projects = require("../models/project-model");
const Resources = require("../models/resources-model");
const Tasks = require("../models/task-model");

router.get("/", (req, res) => {
    let output = []
    Projects.getProjects()
        .then(projects =>{
            projects.forEach(project => {
                if(project.completed === 1){
                    project.completed = true
                } else {
                    project.completed = false
                }
                output.push(project)
            })
            res.status(200).json(output)
        })
        .catch(err => res.status(400).json({error:"Error fetching projects"}))
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    Projects.getProjectById(id)
        .then(project =>
            {
                if(project.completed === 1){
                    project.completed = true
                } else {
                    project.completed = false
                }
                res.status(200).json(project)
            })
        .catch(err => res.status(400).json({error:"Error fetching projects"}))
})

router.post("/", (req, res) => {
    const project = req.body;
    Projects.addProject(project)
        .then(proj => res.status(201).json(proj))
        .catch(err => res.status(400).json(err))
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const project = req.body;
    Projects.updateProject(id, project)
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Projects.deleteProject(id)
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(400).json(err))
})

router.get("/:id/complete", (req, res) => {
    const { id } = req.params;
    Projects.getProjectById(id)
        .then(project => {
            let temp = {
                project: project,
            }
            Tasks.getProjectTasks(id)
            .then(tasks => {
                temp.project.tasks = tasks
                Resources.getProjectResources(id)
                .then(resources => {
                    temp.project.resources = resources
                    if(temp.project.completed === 1){
                        temp.project.completed = true
                    } else {
                        temp.project.completed = false
                    }
                    res.status(200).json(temp)
                })
                .catch(err => res.status(400).json({error: err}))
            })
            .catch(err => res.status(400).json({error: err}))
        })
        .catch(err => res.status(400).json({error: err}))
})

router.post("/:id/addtask", (req, res) => {
    const { project_id, task_id } = req.body;
    const task = {
        project_id: project_id,
        task_id: task_id
    }
    Tasks.addTaskProjects(task)
        .then(task => res.status(201).json(task))
        .catch(err => res.status(400).json(err))
})

router.post("/:id/addresource", (req, res) => {
    const { project_id, resource_id } = req.body;
    const temp = {
        project_id: project_id,
        resource_id: resource_id
    }
    Resources.addProjectResource(temp)
        .then(resource => res.status(201).json(resource))
        .catch(err => res.status(400).json(err))
})

module.exports = router;