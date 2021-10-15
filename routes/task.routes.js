const router = require('express').Router()
const taskControllers = require('../controllers/task.controllers')

//  POST /api/tasks  -  Creates a new task
router.post('/', taskControllers.postTask)

//  GET /api/tasks/:taskId  - Retrieves a specific task by id
router.get('/:taskId', taskControllers.getTasks)

// PUT  /api/tasks/:taskId  - Updates a specific task by id
router.put('/:taskId', taskControllers.getTask)

//  DELETE /api/tasks/:taskId  - Deletes a specific task by id
router.delete('/:taskId', taskControllers.deleteTask)

module.exports = router
