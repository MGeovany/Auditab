const express = require('express')
const Controller = require('../Controllers/hardwareController')
const routerHardware = express.Router()

routerHardware.post('/hardware', Controller.create)

routerHardware.put('/hardware/:id', Controller.update)

routerHardware.get('/hardware', Controller.getAll)

routerHardware.get('/hardware/serial', Controller.getbyName)

routerHardware.get('/hardware/:id', Controller.getbyID)

routerHardware.delete('/hardware/:id', Controller._delete)

module.exports = routerHardware
