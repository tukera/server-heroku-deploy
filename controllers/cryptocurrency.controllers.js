const Api = require('../services/CryptosHandler')
const CryptosApi = new Api()
const CryptoPost = require('../models/Cryptocurrency.model')

exports.getAllCryptos = (req, res) => {
  CryptosApi.getAllCryptos().then((coins) => {
    res.status(201).json(coins.data)
  })
}

exports.postAllCryptos = (req, res) => {
  const post = new CryptoPost({
    name: req.body.name,
    image: req.body.image
  })

  console.log(req.body)

  post
    .save()
    .then((data) => {
      res.json(data)
      console.log(data)
    })
    .catch(err => {
      res.json(err)
    })
}
