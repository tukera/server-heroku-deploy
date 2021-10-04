const Api = require('../services/CryptosHandler')
const CryptosApi = new Api()

const getAllCryptos = (req, res) => {
  CryptosApi.getAllCryptos().then((allCoins) => {
    console.log('Data', allCoins.data)
    res.status(201).json({ coin: allCoins.data })
  })
}

exports.getAllCryptos = getAllCryptos
