exports.getAllNews = (req, res) => {
  res.status(201).json(news.data.articles)
}
