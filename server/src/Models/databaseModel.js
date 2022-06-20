const mongoose = require('mongoose')

const databaseSchema = mongoose.Schema(
  {
    dateBackedUp: { type: String, require: true },
    description: { type: String, require: true }
  },
  {
    collection: 'DataBase'
  }
)

module.exports = mongoose.model('DataBase', databaseSchema)
