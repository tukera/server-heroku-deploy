const NewsAPI = require('../services/NewsHandler')
const newsApi = new NewsAPI()

exports.getAllNews = (req, res) => {
  newsApi.getAllNews().then((news) => {
    res.status(201).json(news.data)
  })
}
