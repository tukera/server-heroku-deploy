module.exports = (app) => {
  app.use('/api', require('./cryptocurrency.routes'))
  app.use('/api/auth', require('./auth.routes'))
  app.use('/api/news', require('./news.routes'))
}
