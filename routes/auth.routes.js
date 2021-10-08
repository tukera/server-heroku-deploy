const router = require('express').Router()
const authController = require('../controllers/auth.controllers')
const { isAuthenticated } = require('../middleware/jwt.middleware.js')

// POST /auth/signup  - Creates a new user in the database
router.post('/signup', authController.signup)

// POST  /auth/login - Verifies email and password and returns a JWT
router.post('/login', authController.login)

// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get('/verify', isAuthenticated, authController.verify)

module.exports = router
