const Api = require('../services/NewsHandler')
const NewsApi = new Api()

exports.getAllNews = (req, res) => {
  NewsApi.getAllNews().then((news) => {
    res.status(201).json(news.data)
  })
}
