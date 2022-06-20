const express = require('express')
const Controller = require('../Controllers/maintenacebackupController')
const router = express.Router()

router.post('/maintenace', Controller.create)

router.put('/maintenace/:id', Controller.update)

router.get('/maintenace', Controller.getAll)

router.get('/maintenace/name', Controller.getbyName)

router.get('/maintenace/:id', Controller.getbyID)

router.delete('/maintenace/:id', Controller._delete)

module.exports = router
