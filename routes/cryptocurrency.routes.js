const router = require('express').Router()
const {
  addFavorite,
  deleteFavorite
} = require('../controllers/cryptocurrency.controllers')

router.post('/add-favorite', addFavorite)
router.post('/delete-favorite', deleteFavorite)

module.exports = router
