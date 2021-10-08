const User = require('../models/User.model')
const Cryptocurrency = require('../models/Cryptocurrency.model')

exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id' + req.params.id
        })
      }
    })
    .catch()
}

exports.userProfile = (req, res) => {
  // console.log('WWWWWWWWWWWWWW', req)

  // User.findById(req.user._id)
  //   // .populate('Cryptocurrency')
  //   .then((user) => {
  //     console.log(user)
  //     res.status(201).json(user)
  //   })

  const { userId } = req.params

  console.log(req.params)

  User.findById(userId).then((user) => res.json(user))
}

exports.addFavorite = (req, res) => {
  const query = ({
    symbol,
    name,
    image,
    current_price,
    market_cap,
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
  } = req.body)

  Cryptocurrency.find({ id: id }).then((charArray) => {
    //comprobar si ese apiId ya esta en db Cryptocurrency
    if (charArray.length === 0) {
      Cryptocurrency.create(query)
        .then((result) => {
          User.findByIdAndUpdate(req.user._id, {
            $push: { cryptocurrency: result._id }
          }).then(() => {
            res.redirect('/user')
          })
        })
        .catch((err) => console.log(err))
    } else {
      User.findById(req.user._id)
        .then((user) => {
          if (!user.cryptocurrency.includes(charArray[0]._id)) {
            User.findByIdAndUpdate(req.user._id, {
              $push: { cryptocurrency: charArray[0]._id }
            }).then(() => {
              res.redirect('/user')
            })
          } else {
            res.redirect('/user')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
}

exports.removeFavorite = (req, res) => {
  User.findByIdAndUpdate(req.user._id, {
    $pull: { cryptocurrency: req.body.id }
  })
    .then(() => {
      res.redirect('/user')
    })
    .catch((err) => console.log(err))
}
