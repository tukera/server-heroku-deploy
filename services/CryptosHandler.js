const axios = require('axios')

class CryptosApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.coingecko.com/api/v3/',
      params: {
        vs_currency: 'eur',
        order: 'market_cap_rank_desc',
        per_page: '20',
        page: '1',
        price_change_percentage: '1y,1h,24h,7d,14d,30d,200d'
      }
    })
  }

  getAllCryptos = () => this.api.get('coins/markets')
}

module.exports = CryptosApi
