const express = require('express')
const consumableController = require('../Controllers/generalconsumableController')
const routerConsumable = express.Router()

routerConsumable.post('/consumable', consumableController.createConsumable)

routerConsumable.put('/consumable/:id', consumableController.updateConsumable)

routerConsumable.get('/consumable', consumableController.allConsumable)

routerConsumable.get('/consumable/name', consumableController.nameConsumable)

routerConsumable.get('/consumable/:id', consumableController.consumablebyID)

routerConsumable.delete(
  '/consumable/:id',
  consumableController.deleteConsumable
)

module.exports = routerConsumable
