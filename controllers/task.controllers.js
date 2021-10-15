const mongoose = require('mongoose')
const Task = require('../models/Task.model')
const Project = require('../models/Project.model')

exports.postTask = (req, res, next) => {
  const { title, description, projectId } = req.body

  Task.create({ title, description, project: projectId })
    .then((newTask) => {
      return Project.findByIdAndUpdate(projectId, {
        $push: { tasks: newTask._id }
      })
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
}

exports.getTasks = (req, res, next) => {
  const { taskId } = req.params

  Task.findById(taskId)
    .then((task) => res.json(task))
    .catch((error) => res.json(error))
}

exports.getTask = (req, res, next) => {
  const { taskId } = req.params

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Task.findByIdAndUpdate(taskId, req.body, { new: true })
    .then((updatedTask) => res.json(updatedTask))
    .catch((err) => res.json(err))
}

exports.deleteTask = (req, res, next) => {
  const { taskId } = req.params

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Task.findByIdAndRemove(taskId)
    .then(() =>
      res.json({ message: `Task with ${taskId} is removed successfully.` })
    )
    .catch((error) => res.json(error))
}
