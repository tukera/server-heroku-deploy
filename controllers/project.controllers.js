const mongoose = require('mongoose')
const Project = require('../models/Project.model')

exports.postProject = (req, res) => {
  const { title, description } = req.body

  Project.create({ title, description, tasks: [] })
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
}

exports.getProjects = (req, res) => {
  Project.find()
    .populate('tasks')
    .then((allProjects) => res.json(allProjects))
    .catch((err) => res.json(err))
}

exports.getProject = (req, res) => {
  const { projectId } = req.params

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  // Each Project document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Project.findById(projectId)
    .populate('tasks')
    .then((project) => res.status(200).json(project))
    .catch((error) => res.json(error))
}

exports.putProject = (req, res) => {
  const { projectId } = req.params

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Project.findByIdAndUpdate(projectId, req.body, { new: true })
    .then((updatedProject) => res.json(updatedProject))
    .catch((error) => res.json(error))
}

exports.deleteProject = (req, res) => {
  const { projectId } = req.params

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  Project.findByIdAndRemove(projectId)
    .then(() =>
      res.json({
        message: `Project with ${projectId} is removed successfully.`
      })
    )
    .catch((error) => res.json(error))
}
