const router = require('express').Router()
const userController = require('../controllers/user.controllers')

router.get('/:id', userController.findOne)

router.post('/user', userController.addFavorite)

router.post('/remove-favorite', userController.removeFavorite)

module.exports = router
