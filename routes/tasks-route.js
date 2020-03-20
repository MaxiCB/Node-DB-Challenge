const express = require("express");

const router = express.Router();

const Tasks = require("../models/task-model");

router.get("/", (req, res) => {
    Tasks.getTasks()
        .then(Tasks => res.status(200).json(Tasks))
        .catch(err => res.status(400).json({error:"Error fetching Tasks"}))
})

router.post("/", (req, res) => {
    const task = req.body;
    Tasks.addTask(task)
        .then(task => res.status(201).json(task))
        .catch(err => res.status(400).json(err))
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const task = req.body;
    Tasks.updateTask(id, task)
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(400).json(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Tasks.deleteTask(id)
        .then(proj => res.status(200).json(proj))
        .catch(err => res.status(400).json(err))
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    Tasks.getTaskById(id)
        .then(task => {
            if (task.completed === 1) {
                task.completed = true;
              } else {
                task.completed = false;
              }
            res.status(200).json(task)
        })
        .catch(err => res.status(400).json({error:"Error fetching Tasks"}))
})

router.get("/:id/tasks", (req, res) => {
    const { id } = req.params;
    Tasks.getProjectTasks(id)
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(400).json({error:"Error fetching tasks"}))
})

module.exports = router;