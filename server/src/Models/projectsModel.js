const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
  {
    description: { type: String, require: true },
    startDate: { type: Date, require: true },
    endDate: { type: Date, require: true }
  },
  {
    collection: 'Projects'
  }
)

module.exports = mongoose.model('Projects', projectSchema)
