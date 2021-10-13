const NewsAPI = require('../services/News.handler')
const newsApi = new NewsAPI()

exports.getAllNews = (req, res) => {
  newsApi.getAllNews().then((news) => {
    res.status(201).json(news.data.articles)
  })
}
