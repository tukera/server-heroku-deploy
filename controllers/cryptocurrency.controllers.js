const Cryptocurrency = require('../models/Cryptocurrency.model')
const User = require('../models/User.model')

exports.addFavorite = (req, res) => {
  const query = ({
    symbol,
    name,
    image,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    circulating_supply,
    price_change_percentage_14d_in_currency,
    price_change_percentage_1h_in_currency,
    price_change_percentage_1y_in_currency,
    price_change_percentage_200d_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_30d_in_currency,
    price_change_percentage_7d_in_currency,
    id
  } = req.body.cryptocurrency)

  // console.log('idToCheck', id)
  // console.log('QUERY', query)
  Cryptocurrency.findOne({ id: id }).then((currency) => {
    // console.log('cryptocurrency', currency)
    if (!currency) {
      Cryptocurrency.create(query).then((result) => {
        User.findByIdAndUpdate(
          req.body.user._id,
          {
            $push: { cryptocurrency: result._id }
          },
          { new: true }
        )
          .populate('cryptocurrency')
          .then((user) => {
            res.json(user)
          })
          .catch((err) => console.log(err))
      })
    } else {
      User.findByIdAndUpdate(
        req.body.user._id,
        {
          $push: { cryptocurrency: currency._id }
        },
        { new: true }
      )
        .populate('cryptocurrency')
        .then((user) => {
          res.json(user)
        })
        .catch((err) => console.log(err))
    }
  })
}

exports.deleteFavorite = (req, res) => {
  Cryptocurrency.find({ id: req.body.cryptocurrency.id }).then((response) => {
    const idNeed = response[0]._id
    User.findByIdAndUpdate(
      req.body.user._id,
      { $pull: { cryptocurrency: idNeed } },
      { new: true }
    )
      .populate('cryptocurrency')
      .then((response) => {
        res.json(response)
      })
      .catch((err) => console.log(err))
  })
}
