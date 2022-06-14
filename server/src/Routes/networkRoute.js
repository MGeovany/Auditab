const express = require('express')
const Controller = require('../Controllers//networkController')
const router = express.Router()

router.post('/network', Controller.create)

router.put('/network/:id', Controller.update)

router.get('/network', Controller.getAll)

router.get('/network/name', Controller.getbyName)

router.get('/network/:id', Controller.getbyID)

router.delete('/network/:id', Controller._delete)

module.exports = router
