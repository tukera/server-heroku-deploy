const router = require('express').Router()
const projectControllers = require('../controllers/project.controllers')

//  POST /api/projects  -  Creates a new project
router.post('/', projectControllers.postProject)

//  GET /api/projects -  Retrieves all of the projects
router.get('/', projectControllers.getProjects)

//  GET /api/projects/:projectId -  Retrieves a specific project by id
router.get('/:projectId', projectControllers.getProject)

// PUT  /api/projects/:projectId  -  Updates a specific project by id
router.put('/:projectId', projectControllers.putProject)

// DELETE  /api/projects/:projectId  -  Deletes a specific project by id
router.delete('/:projectId', projectControllers.deleteProject)

module.exports = router
