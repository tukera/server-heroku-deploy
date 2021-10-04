const router = require('express').Router()
const cryptocurrenciesController = require('../controllers/cryptocurrency-controllers')

router.get('/', cryptocurrenciesController.getAllCryptos)

module.exports = router
