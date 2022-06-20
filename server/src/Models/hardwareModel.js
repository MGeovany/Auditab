const mongoose = require('mongoose')

const hardwareSchema = mongoose.Schema(
  {
    serial_number: { type: String, require: true },
    description: { type: String, require: true },
    model: { type: String, require: true },
    price: { type: Number, require: true },
    buyDate: { type: String, require: true }
  },
  {
    collection: 'Hardware'
  }
)

module.exports = mongoose.model('Hardware', hardwareSchema)
