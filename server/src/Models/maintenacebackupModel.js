const mongoose = require('mongoose')

const maintenacebackupSchema = mongoose.Schema(
  {
    description: { type: String, require: true },
    date: { type: Date, require: true }
  },
  {
    collection: 'MaintenaceAndBackups'
  }
)

module.exports = mongoose.model('MaintenaceAndBackups', maintenacebackupSchema)
