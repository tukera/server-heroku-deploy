const axios = require('axios')

class NewsApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://newsapi.org/v2/everything?apiKey=883eb66584f04c30a3b6df5b370d31ea&q=cryptocurrencies',
    });
  }

  getAllNews = () =>
    this.api.get(
      'apiKey=883eb66584f04c30a3b6df5b370d31ea&q=cryptocurrencies'
    );
}

module.exports = NewsApi;
 