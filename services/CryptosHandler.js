const axios = require('axios')
class CryptosApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.coingecko.com/api/v3/'
    })
  }

  getAllCryptos = () =>
    this.api.get(
      'coins/markets?vs_currency=eur&order=market_cap_rank_desc&per_page=100&page=1&price_change_percentage=1y,1h,24h,7d,14d,30d,200d&sparkline=true'
    )

    getDayPrice () {
      return this.api.get('/coins')
    }

    getDayPrice (id) {
      return this.api.get(`/coins/${id}/market_chart?vs_currency=eur&days=1`)
    }
}

module.exports = CryptosApi
