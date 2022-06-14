const mongoose = require('mongoose')

const jobPositionSchema = mongoose.Schema(
  {
    description: { type: String, require: true },
    accessLevel: { type: String, require: true }
  },
  {
    collection: 'JobPosition'
  }
)

module.exports = mongoose.model('JobPosition', jobPositionSchema)
