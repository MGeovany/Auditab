const mongoose = require('mongoose')

const generalconsumablesSchema = mongoose.Schema(
  {
    price: { type: Number, require: true },
    description: { type: String, require: true }
  },
  {
    collection: 'GeneralConsumables'
  }
)

module.exports = mongoose.model('GeneralConsumables', generalconsumablesSchema)
