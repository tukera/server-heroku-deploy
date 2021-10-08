const router = require('express').Router()
const newsController = require('../controllers/news.controllers')

router.get('/', newsController.getAllNews)

module.exports = router
