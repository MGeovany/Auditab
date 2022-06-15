const mongoose = require('mongoose')

const usersSchema = mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    access: { type: String, require: true }
  },
  {
    collection: 'Users'
  }
)

module.exports = mongoose.model('Users', usersSchema)
