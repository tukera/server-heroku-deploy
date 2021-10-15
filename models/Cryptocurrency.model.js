const mongoose = require('mongoose')
const { Schema, model } = mongoose

const CryptocurrencySchema = new Schema(
  {
    symbol: String,
    name: String,
    image: String,
    current_price: Number,
    market_cap: Number,
    market_cap_rank: Number,
    price_change_percentage_24h: Number,
    circulating_supply: Number,
    price_change_percentage_14d_in_currency: Number,
    price_change_percentage_1h_in_currency: Number,
    price_change_percentage_1y_in_currency: Number,
    price_change_percentage_200d_in_currency: Number,
    price_change_percentage_24h_in_currency: Number,
    price_change_percentage_30d_in_currency: Number,
    price_change_percentage_7d_in_currency: Number,
    id: String
  },
  {
    timestamps: true
  }
)

module.exports = model('Cryptocurrency', CryptocurrencySchema)
