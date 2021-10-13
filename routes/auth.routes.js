const router = require('express').Router()
const authController = require('../controllers/auth.controllers')
const { isAuthenticated } = require('../middleware/jwt.middleware.js')

// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get('/', isAuthenticated, authController.verify)

// POST  /auth/login - Verifies email and password and returns a JWT
router.post('/login', authController.login)

// POST /auth/signup  - Creates a new user in the database
router.post('/signup', authController.signup)

module.exports = router
