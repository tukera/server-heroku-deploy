module.exports = (app) => {
  app.use('/api/cryptocurrency', require('./cryptocurrency.routes'))
  app.use('/api/auth', require('./auth.routes'))
  app.use('/api/user', require('./user.routes'))
  app.use('/api/projects', require('./project.routes'))
  app.use('/api/tasks', require('./task.routes'))
  // app.use('/api/news', require('./news.routes'))
}
