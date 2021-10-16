const router = require('express').Router()
const userController = require('../controllers/user.controllers')

router.post('/', userController.postUser)

module.exports = router