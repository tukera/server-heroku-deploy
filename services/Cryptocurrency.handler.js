const axios = require('axios')

class CryptocurrencyApi {
  constructor () {
    this.api = axios.create({
      baseURL: 'https://api.coingecko.com/api/v3'
    })
  }

  getAllCryptos () {
    return this.api.get(
      '/coins/markets?vs_currency=eur&order=market_cap_rank_desc&per_page=100&page=1&price_change_percentage=1y,1h,24h,7d,14d,30d,200d&sparkline=true'
    )
  }

  getACrypto (id) {
    return this.api.get(
      `/coins/${id}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    )
  }
}

module.exports = CryptocurrencyApi
