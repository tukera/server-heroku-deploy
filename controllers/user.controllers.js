const User = require('../models/User.model')

exports.postUser = (req, res) => {
  User.findById(req.body.user._id)
    .populate('cryptocurrency')
    .then((allFavorites) => res.json(allFavorites))
    // .then((allFavorites) => console.log('=============>> ', allFavorites))
    .catch((err) => res.json(err))
}
