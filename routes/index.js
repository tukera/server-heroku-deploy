const router = require('express').Router()

// DEMO Test
// const Cryptocurrency = require('../models/Cryptocurrency.model')
const Api = require('../services/CryptosHandler')
const CryptosApi = new Api()

router.get('/', (req, res, next) => {
  CryptosApi.getAllCryptos().then((allCoins) => {
    console.log('Data', allCoins.data)
    res.status(201).json({ coin: allCoins.data })
  })
})

module.exports = router
