const express = require('express')
const furnitureController = require('../Controllers/furnitureController')
const routerFurniture = express.Router()

routerFurniture.post('/furniture', furnitureController.createFurniture)

routerFurniture.put('/furniture/:id', furnitureController.updateFurniture)

routerFurniture.get('/furniture', furnitureController.allFurniture)

routerFurniture.get('/furniture', furnitureController.serialFurniture)

routerFurniture.get('/furniture/:id', furnitureController.furniturebyID)

routerFurniture.delete('/furniture/:id', furnitureController.deleteFurniture)

module.exports = routerFurniture
