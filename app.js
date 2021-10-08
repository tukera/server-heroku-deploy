require('dotenv/config')
const express = require('express')

// set up our express app
const app = express()
// connect to mongodb
require('./db/index.js')
// connect to config
require('./config')(app)
// require routes
require('./routes/')(app)

require('./error-handling')(app)

module.exports = app
