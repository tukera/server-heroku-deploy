const axios = require('axios')
class NewsApi {
  constructor () {
    this.api = axios.create({
      baseURL: 'https://newsapi.org/v2/everything?'
    })
  }

  getAllNews () {
    return this.api.get(`&apiKey=${process.env.API_NEWS_KEY}&q=cryptocurrencies`)
  }
}

module.exports = NewsApi
