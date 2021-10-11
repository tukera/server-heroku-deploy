const Api = require('../services/Cryptocurrency.handler')
const CryptocurrencyApi = new Api()

exports.getAllCryptos = (req, res) => {
  CryptocurrencyApi.getAllCryptos().then((coins) => {
    res.status(201).json(coins.data)
  })
}

exports.getACrypto = (req, res) => {
  CryptocurrencyApi.getACrypto().then((coin) => {
    res.status(201).json(coin.data)
  })
}
