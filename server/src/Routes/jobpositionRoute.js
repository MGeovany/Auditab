const express = require('express')
const Controller = require('../Controllers/jobposotionController')
const router = express.Router()

router.post('/job', Controller.create)

router.put('/job/:id', Controller.update)

router.get('/job', Controller.getAll)

router.get('/job/name', Controller.getbyName)

router.get('/job/:id', Controller.getbyID)

router.delete('/job/:id', Controller._delete)

module.exports = router
