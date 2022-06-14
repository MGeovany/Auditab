const express = require('express')
const Controller = require('../Controllers/softwareController')
const router = express.Router()

router.post('/software', Controller.create)

router.put('/software/:id', Controller.update)

router.get('/software', Controller.getAll)

router.get('/software/name', Controller.getbyName)

router.get('/software/:id', Controller.getbyID)

router.delete('/software/:id', Controller._delete)

module.exports = router
