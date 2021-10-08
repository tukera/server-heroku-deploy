const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    cryptocurrency: {
      type: [Schema.Types.ObjectId],
      ref: 'Cryptocurrency'
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', userSchema)
