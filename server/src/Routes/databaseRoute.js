const express = require('express')
const databaseController = require('../Controllers/databaseController')
const routerDataBase = express.Router()

routerDataBase.post('/database', databaseController.createDataBase)

routerDataBase.put('/database/:id', databaseController.updateDataBase)

routerDataBase.get('/database', databaseController.allDataBase)

routerDataBase.get('/database/Name', databaseController.nameDataBase)

routerDataBase.get('/database/:id', databaseController.databasebyID)

routerDataBase.delete('/database/:id', databaseController.databaseDelete)

module.exports = routerDataBase
