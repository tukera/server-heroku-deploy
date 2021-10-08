const router = require('express').Router()
const cryptocurrenciesController = require('../controllers/cryptocurrency.controllers')

router.get('/', cryptocurrenciesController.getAllCryptos)
router.post('/', cryptocurrenciesController.postAllCryptos)

module.exports = router
