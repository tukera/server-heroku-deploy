const CryptocurrencyModel = require('../models/Cryptocurrency.model')

exports.getAllCryptos = (req, res) => {
  res.status(201).json(console.log('res =================>>', res))
}

// exports.getACrypto = (req, res) => {
//   CryptocurrencyApi.getACrypto().then((coin) => {
//     res.status(201).json(coin.data)
//   })
// }

// exports.postFav = (req, res, next) => {
//   const { title, description } = req.body

//   Project.create({ title, description, tasks: [] })
//     .then((response) => res.json(response))
//     .catch((err) => res.json(err))
// }
