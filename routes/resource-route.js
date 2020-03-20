const express = require("express");

const router = express.Router();

const Resources = require("../models/resources-model");

router.get("/", (req, res) => {
    Resources.getResources()
        .then(Tasks => res.status(200).json(Tasks))
        .catch(err => res.status(400).json({error:"Error fetching Tasks"}))
})

router.post("/", (req, res) => {
    const resource = req.body;
    Resources.addResource(resource)
        .then(resource => res.status(201).json(resource))
        .catch(err => res.status(400).json(err))
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const project = req.body;
    Resources.updateProject(id, project)
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Resources.deleteProject(id)
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(400).json(err))
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    Resources.getResourceById(id)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(400).json({error:"Error fetching Tasks"}))
})

router.get("/:id/resources", (req, res) => {
    const { id } = req.params;
    Resources.getProjectResources(id)
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(400).json({error:"Error fetching tasks"}))
})

module.exports = router;