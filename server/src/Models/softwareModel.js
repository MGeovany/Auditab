const mongoose = require('mongoose')

const softwareSchema = mongoose.Schema(
  {
    description: { type: String, require: true },
    dateAdded: { type: String, require: true },
    dateExpiration: { type: String, require: true },
    price: { type: Number, require: true }
  },
  {
    collection: 'Software'
  }
)

module.exports = mongoose.model('Software', softwareSchema)
