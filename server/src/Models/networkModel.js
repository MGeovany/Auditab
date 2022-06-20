const mongoose = require('mongoose')

const networkSchema = mongoose.Schema(
  {
    type: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true }
  },
  {
    collection: 'Network'
  }
)

module.exports = mongoose.model('Network', networkSchema)
