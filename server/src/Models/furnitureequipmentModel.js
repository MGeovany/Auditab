const mongoose = require('mongoose')

const furnitureequipmentSchema = mongoose.Schema(
  {
    serialNumber: { type: String, require: true },
    description: { type: String, require: true }
  },
  {
    collection: 'FurnitureAndEquipment'
  }
)

module.exports = mongoose.model(
  'FurnitureAndEquipment',
  furnitureequipmentSchema
)
